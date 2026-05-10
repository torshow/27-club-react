import React from "react";

function SearchBar() {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search artist..."
        className="searchbar-input"
      />
      <button className="searchbar-btn">Search</button>
    </div>
  );
}

export default SearchBar;