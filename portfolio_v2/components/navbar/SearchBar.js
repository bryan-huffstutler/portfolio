import React, { useState } from "react";
import { WiMoonAltFirstQuarter } from "react-icons/wi";

function SearchBar(props) {
  return (
    <div className="col-start-3 col-end-4 justify-end flex mr-10 mb-2">
      <WiMoonAltFirstQuarter size="2em" onClick={props.handleTheme} className="mr-4"/>
      <input type="text" className="rounded-l-lg text-zinc-900" />
      <button className="bg-white text-zinc-900 rounded-r-lg p-1 ml-1">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
