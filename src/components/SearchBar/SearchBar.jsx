import React from "react";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <span>Enter book name: </span>
      <input
        className="searchbar__input"
        type="text"
        placeholder="Search by name..."
      />
    </div>
  );
};

export default SearchBar;
