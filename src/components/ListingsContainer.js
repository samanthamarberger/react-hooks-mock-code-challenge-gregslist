import React, { useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {

  useEffect(() => {
    fetch ("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((listings) => setListings(listings));
  }, [])

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
    setListings(updatedListings);
  }

  return (
    <main>
      <ul className="cards">
        {listings.map((item) => (
          <ListingCard key={item.description} listing={item} onDeleteListing={handleDeleteListing}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
