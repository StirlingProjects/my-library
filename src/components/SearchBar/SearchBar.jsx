import React from "react";

const SearchBar = (props) => {
  const { search_item } = props;

  return (
    <div className="searchbar">
      <label htmlFor="searchbar__input">Enter book {search_item}: </label>
      <input
        id="searchbar__input"
        className="searchbar__input"
        type="text"
        placeholder={"Enter " + search_item}
      />
    </div>
  );
};

export default SearchBar;
