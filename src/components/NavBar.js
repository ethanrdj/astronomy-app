import React from "react";
import { Link as LinkRRD, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

import "../styles/NavBar.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="NavBar">
      <ul className="all-nav">
        {location.pathname === "/" ? (
          <Link
            activeClass="active"
            to="apod"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li className="nav-item">APOD</li>
          </Link>
        ) : (
          <LinkRRD to="/">
            <li className="nav-item">HOME</li>
          </LinkRRD>
        )}
        <LinkRRD to="/solarsystem">
          <li className="nav-item">OUR SOLAR SYSTEM</li>
        </LinkRRD>
      </ul>
    </nav>
  );
};

export default NavBar;
