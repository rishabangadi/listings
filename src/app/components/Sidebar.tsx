import { FormEvent, useState } from "react";

const Sidebar = ({
  getData,
}: {
  getData: (
    address: string,
    pageSize: number,
    checkInDate: string,
    checkOutDate: string,
    adults: number
  ) => Promise<void>;
}) => {
  const [address, setAddress] = useState(
    "73 W Monroe St, Chicago, IL 60603, USA"
  );
  const [pageSize, setPageSize] = useState(10);
  const [adults, setAdults] = useState(2);
  const [checkInDate, setCheckInDate] = useState("2024-03-01");
  const [checkOutDate, setCheckOutDate] = useState("2024-03-05");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (address && pageSize)
      getData(address, pageSize, checkInDate, checkOutDate, adults);
  }

  return (
    <div className="h-fit w-96 mt-4">
      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid gap-6 mb-6">
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="73 W Monroe St, Chicago, IL 60603, USA"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="page_size"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Page size
            </label>
            <input
              type="text"
              id="page_size"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            />
          </div>
          <div>
            <label
              htmlFor="adults"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number of Adults
            </label>
            <input
              type="text"
              id="adults"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
            />
          </div>
          <div className="flex justify-between">
            <div>
              <label
                htmlFor="checkin-date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Check-In Date
              </label>
              <input
                type="date"
                id="checkin-date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="checkout-date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Check-Out Date
              </label>
              <input
                type="date"
                id="checkout-date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="block w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
