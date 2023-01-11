import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [typeValue, setTypeValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(typeValue);
    const displaySearch = listings.filter((listing) => {
      if(typeValue === "") {
        return listing;
      }
      if(listing.description.toLowerCase().includes(typeValue.toLowerCase())){
        return listing;
      }
    })
    setListings(displaySearch);
  }

  return (
    <div className="app">
      <Header typeValue={typeValue} setTypeValue={setTypeValue} handleSubmit={handleSubmit}/>
      <ListingsContainer listings={listings} setListings={setListings}/>
    </div>
  );
}

export default App;
