import React, { useState } from "react";

import "./Home.scss";

import NavBar from "../NavBar/NavBar";
import Library from "../Library/Library";
import Explore from "../Explore/Explore";

import userLibrary from "../../assets/data/dummydata";

const Home = () => {
  const [userLibraryArray, setUserLibraryArray] = useState(userLibrary);

  setUserLibraryArray(userLibrary);
  return (
    <div className="home">
      <NavBar />
      My Library
      <div className="home__containers">
        <div className="home__library">
          <Library libraryArray={userLibraryArray} />
        </div>
        <div className="home__explore">
          <Explore />
        </div>
      </div>
    </div>
  );
};

export default Home;
