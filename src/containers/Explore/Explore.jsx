import React from "react";

import SearchBar from "../../components/SearchBar/SearchBar";


const Explore = () => {
  return (
    <div>
      Explore
      <SearchBar search_item="Book Name" />
      <SearchBar search_item="ISBN" />
    </div>
  );
};

export default Explore;
