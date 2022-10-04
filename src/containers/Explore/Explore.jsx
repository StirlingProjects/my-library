import React, { useState } from "react";

import NavBar from "../NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";

const Explore = () => {
  const [ISBN, setISBN] = useState("");

  const handleSearchISBNChange = (event) => {
    event.preventDefault();
    setISBN(event.target.search.value);
  };

  return (
    <div>
      <NavBar />
      Explore
      <SearchBar search_item="ISBN" handleChange={handleSearchISBNChange} />
      <div>{ISBN}</div>
    </div>
  );
};

export default Explore;
