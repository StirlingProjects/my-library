import React from "react";

import NavBar from "../NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";

const Explore = () => {
  return (
    <div>
      <NavBar />
      Explore
      <SearchBar search_item="Book Name" />
      <SearchBar search_item="ISBN" />
    </div>
  );
};

export default Explore;
