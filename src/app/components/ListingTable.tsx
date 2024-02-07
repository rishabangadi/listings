const ListingTable = ({ listings }: { listings: Array<any> }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="divide-y bg-gray-200 relative">
        <thead className="bg-gray-100">
          <tr className="">
            <th
              scope="col"
              className="px-6 py-3 text-left text-lg  text-gray-500 uppercase tracking-wider font-bold"
            >
              Listing ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-lg  text-gray-500 uppercase tracking-wider font-bold"
            >
              Listing Title
            </th>
            <th
              scope="col"
              className=" px-6 py-3 text-left text-lg  text-gray-500 uppercase tracking-wider font-bold"
            >
              Nightly Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-lg  text-gray-500 uppercase tracking-wider font-bold"
            >
              Listing URL
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {listings.map((listing) => (
            <tr key={listing.id}>
              <td className="px-6 py-4 whitespace-nowrap">{listing.id}</td>
              <td className="px-6 py-4 whitespace-wrap w-2/3">
                {listing.headingSection.heading}
              </td>
              <td className="px-6 py-4 whitespace-nowrap ">
                {
                  listing.priceSection.priceSummary.displayMessages[0]
                    .lineItems[0].price.formatted
                }
              </td>
              <td className="px-6 py-4 whitespace-wrap">
                <a
                  href={listing.cardLink.resource.value}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  {listing.cardLink.resource.value.substring(0, 40)}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListingTable;
