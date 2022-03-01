import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname: path } = useLocation();

  return (
    <div className="navbar">
      <h1>Your name</h1>
      <div className="navbar__container">
        <Link to="/">
          <h3 className={path === "/" ? "navbar__selected" : ""}>About me</h3>
        </Link>
        <Link to="/portfolio">
          <h3 className={path === "/portfolio" ? "navbar__selected" : ""}>
            Portfolio
          </h3>
        </Link>
        <Link to="/contact">
          <h3 className={path === "/contact" ? "navbar__selected" : ""}>
            Contact
          </h3>
        </Link>
        <Link to="/resume">
          <h3 className={path === "/resume" ? "navbar__selected" : ""}>
            Resume
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
