import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Library</NavLink>
      <NavLink to="/explore">Explore</NavLink>
    </div>
  );
};

export default NavBar;
