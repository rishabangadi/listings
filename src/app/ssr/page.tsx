import { fetchListings } from "../lib/fetchListings";

async function Listings() {
  const listings = await fetchListings();
  console.log(listings, "printing to console");
  return (
    <div>
      <h1>Listings</h1>
      {/* <ListingTable listings={listings} /> */}
    </div>
  );
}

export default Listings;

const ListingTable = ({ listings }: { listings: Array<any> }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="max-w-screen-lg mx-auto divide-y bg-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="min-w-40 px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
            >
              Listing ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
            >
              Listing Title
            </th>
            <th
              scope="col"
              className="min-w-56 px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
            >
              Nightly Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
            >
              Listing URL
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {listings.map((listing) => (
            <tr key={listing.id}>
              <td className="px-6 py-4 whitespace-nowrap">{listing.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {listing.headingSection.heading}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {
                  listing.priceSection.priceSummary.displayMessages[0]
                    .lineItems[0].price.formatted
                }
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href={listing.cardLink.resource.value}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {listing.cardLink.resource.value.substring(0, 20)}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
