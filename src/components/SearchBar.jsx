import React from "react";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search projects..."
        className="searchbar-input"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button className="searchbar-btn">Search</button>
    </div>
  );
}

export default SearchBar;