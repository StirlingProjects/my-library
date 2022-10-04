import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.scss"

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="navbar__library navbar__link">
        Library
      </NavLink>
      <NavLink to="/explore" className="navbar__explore navbar__link">
        Explore
      </NavLink>
    </div>
  );
};

export default NavBar;
