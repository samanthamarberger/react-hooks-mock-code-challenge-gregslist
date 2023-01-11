import React from "react";
import Search from "./Search";

function Header({ typeValue, setTypeValue, handleSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search typeValue={typeValue} setTypeValue={setTypeValue} handleSubmit={handleSubmit}/>
    </header>
  );
}

export default Header;
