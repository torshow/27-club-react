import React, {useState } from "react";

function SearchBar() {
  const [text, setText] = useState("")
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search artist..."
        className="searchbar-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="searchbar-btn">Search</button>
    </div>
  );
}

export default SearchBar;