import ListingTable from "./ListingTable";

function MainContent({ listings }: { listings: Array<any> }) {
  return (
    <div className="overflow-y-auto h-[calc(100vh-80px)]">
      <ListingTable listings={listings} />
    </div>
  );
}

export default MainContent;
