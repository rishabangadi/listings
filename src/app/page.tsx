"use client";

import React, { useState, useEffect } from "react";
import { fetchListings } from "./lib/fetchListings";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Nav from "./components/Nav";
import Loader from "./components/Loader";

type Status = "Loading" | "Success" | "Active";

function Listings() {
  const [listings, setListings] = useState<Array<any>>([]);
  const [status, setStatus] = useState<Status>("Active");

  async function getData(
    address: string,
    pageSize: number,
    checkInDate: string,
    checkOutDate: string,
    adults: number
  ) {
    setStatus("Loading");
    const listings = await fetchListings(
      address,
      pageSize,
      checkInDate,
      checkOutDate,
      adults
    );
    setListings(listings);
    setStatus("Success");
  }

  return (
    <div className="bg-white h-screen">
      <Nav />
      <div className="flex flex-col items-center gap-8 md:max-w-screen-2xl md:mx-auto md:grid md:items-start md:grid-cols-[400px,minmax(400px,1fr)]">
        <Sidebar getData={getData} />
        {status == "Loading" && (
          <div className="h-[calc(100vh-100px)] grid grid-cols-1 place-items-center">
            <Loader />
          </div>
        )}
        {status == "Success" && <MainContent listings={listings} />}
      </div>
    </div>
  );
}

export default Listings;
