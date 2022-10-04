import React from "react";

const SearchBar = ({ search_item, handleChange }) => {
  return (
    <div className="searchbar">
      <form onSubmit={handleChange}>
        <label htmlFor="searchbar__input">Enter {search_item}: </label>
        <input
          id="searchbar__input"
          name="search"
          className="searchbar__input"
          type="text"
          placeholder={"Enter " + search_item}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
