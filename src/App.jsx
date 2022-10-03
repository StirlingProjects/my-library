import "./App.css";

import { useState } from "react";

import NavBar from "./containers/NavBar/NavBar";
import Library from "./containers/Library/Library";
import Explore from "./containers/Explore/Explore";
import SearchBar from "./components/SearchBar/SearchBar";

import userLibrary from "./assets/data/dummydata";

const App = () => {
  const [userLibraryArray, setUserLibraryArray] = useState(userLibrary);

  return (
    <div className="App">
      <NavBar />
      My Library
      <div className="searchbars">
        <SearchBar search_item="Book Name" />
        <SearchBar search_item="ISBN" />
      </div>
      <div className="containers">
        <Library libraryArray={userLibraryArray} />
        <Explore />
      </div>
    </div>
  );
};

export default App;
