import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav>
        <NavLink to="/">HomePage</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
