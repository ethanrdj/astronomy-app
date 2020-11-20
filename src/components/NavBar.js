import React from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="all-nav">
        <Link>
          <li className="nav-item">APOD</li>
        </Link>
        <Link to="/solarsystem">
          <li className="nav-item">OUR SOLAR SYSTEM</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
