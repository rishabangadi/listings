export const fetchListings = async (
  address: string,
  pageSize: number,
  checkInDate: string,
  checkOutDate: string,
  adults: number
) => {
  const checkIn = checkInDate.split("-");
  const checkOut = checkOutDate.split("-");
  try {
    const response = await fetch("https://www.vrbo.com/graphql", {
      method: "POST",
      headers: {
        authority: "www.vrbo.com",
        accept: "*/*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,no;q=0.7,de;q=0.6",
        "cache-control": "no-cache",
        "client-info": "shopping-pwa,unknown,unknown",
        "content-type": "application/json",
        origin: "https://www.vrbo.com",
        pragma: "no-cache",
        referer:
          "https://www.vrbo.com/search?adults=2&amenities=&children=&d1=2023-12-27&d2=2023-12-28&destination=73%20W%20Monroe%20St%2C%20Chicago%2C%20IL%2060603%2C%20USA&endDate=2024-03-05&latLong=&mapBounds=&pwaDialog=&regionId&semdtl=&sort=RECOMMENDED&startDate=2024-03-01&theme=&userIntent=",
        "sec-ch-ua":
          '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "x-enable-apq": "true",
        "x-page-id": "page.Hotel-Search,H,20",
        Cookie:
          "DUAID=4db28c66-5933-13d6-0561-5a95950c67c3; MC1=GUID=4db28c66593313d605615a95950c67c3; cesc=%7B%22marketingClick%22%3A%5B%22false%22%2C1707208806176%5D%2C%22hitNumber%22%3A%5B%221%22%2C1707208806176%5D%2C%22visitNumber%22%3A%5B%225%22%2C1707208806176%5D%2C%22entryPage%22%3A%5B%22page.Hotel-Search%22%2C1707208806176%5D%7D; hav=4db28c66-5933-13d6-0561-5a95950c67c3; ha-device-id=4db28c66-5933-13d6-0561-5a95950c67c3; has=108fafee-cc0d-4151-7f3c-58a79ec8c8f6; hav=4db28c66-5933-13d6-0561-5a95950c67c3",
      },
      body: JSON.stringify({
        variables: {
          context: {
            siteId: 9001001,
            locale: "en_US",
            eapid: 1,
            currency: "USD",
            device: {
              type: "DESKTOP",
            },
            identity: {
              duaid: "65cbd87c-ebb5-ab83-a4c1-812db78bb787",
              expUserId: "-1",
              tuid: "-1",
              authState: "ANONYMOUS",
            },
            privacyTrackingState: "CAN_TRACK",
            debugContext: {
              abacusOverrides: [],
            },
          },
          criteria: {
            primary: {
              dateRange: {
                checkInDate: {
                  day: Number(checkIn[2]),
                  month: Number(checkIn[1]),
                  year: Number(checkIn[0]),
                },
                checkOutDate: {
                  day: Number(checkOut[2]),
                  month: Number(checkOut[1]),
                  year: Number(checkOut[0]),
                },
              },
              destination: {
                regionName: address,
                regionId: null,
                coordinates: null,
                pinnedPropertyId: null,
                propertyIds: null,
                mapBounds: null,
              },
              rooms: [
                {
                  adults: adults,
                  children: [],
                },
              ],
            },
            secondary: {
              counts: [
                {
                  id: "resultsStartingIndex",
                  value: 150,
                },
                {
                  id: "resultsSize",
                  value: pageSize,
                },
              ],
              booleans: [],
              selections: [
                {
                  id: "sort",
                  value: "RECOMMENDED",
                },
                {
                  id: "privacyTrackingState",
                  value: "CAN_TRACK",
                },
                {
                  id: "useRewards",
                  value: "SHOP_WITHOUT_POINTS",
                },
                {
                  id: "searchId",
                  value: "d1342ebe-2e4c-4c8d-8838-a3967204a6f2",
                },
              ],
              ranges: [],
            },
          },
          destination: {
            regionName: null,
            regionId: null,
            coordinates: null,
            pinnedPropertyId: null,
            propertyIds: null,
            mapBounds: null,
          },
          shoppingContext: {
            multiItem: null,
          },
          returnPropertyType: false,
          includeDynamicMap: true,
        },
        operationName: "LodgingPwaPropertySearch",
        extensions: {
          persistedQuery: {
            sha256Hash:
              "e4ffcd90dd44f01455f9ddd89228915a177f9ec674f0df0db442ea1b20f551c3",
            version: 1,
          },
        },
      }),
    });
    const data = await response.json();
    return data.data.propertySearch.propertySearchListings;
  } catch (error) {
    console.error("Error fetching listings:", error);
  }
};
