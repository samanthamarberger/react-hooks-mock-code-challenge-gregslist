import React from "react";

function Search({ typeValue, setTypeValue, handleSubmit}) {
  

  function changeText(text) {
    setTypeValue(text)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={typeValue}
        onChange={(e) => changeText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
