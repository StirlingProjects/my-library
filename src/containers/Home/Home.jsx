import React from "react";

import "./Home.scss";

import NavBar from "../NavBar/NavBar";
import Library from "../Library/Library";

import userLibrary from "../../assets/data/dummydata";

const Home = () => {
  //const [userLibraryArray, setUserLibraryArray] = useState(userLibrary);

  //setUserLibraryArray(userLibrary);
  return (
    <div className="home">
      <NavBar />
      <div className="home__containers">
        <div className="home__library">
          <Library libraryArray={userLibrary} />
        </div>
        <div className="home__explore"></div>
      </div>
    </div>
  );
};

export default Home;
