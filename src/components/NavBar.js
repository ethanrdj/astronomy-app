import React, { useState } from "react";
import { Link as LinkRRD, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import ReorderIcon from "@material-ui/icons/Reorder";

import "../styles/NavBar.css";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();

  return (
    <div className="NavBar">
      <ul className="all-nav" id={showLinks ? "hidden" : ""}>
        {location.pathname === "/" ? (
          <Link
            activeClass="active"
            to="apod"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li className="nav-item" onClick={() => setShowLinks(!showLinks)}>
              APOD
            </li>
          </Link>
        ) : (
          <LinkRRD to="/">
            <li className="nav-item" onClick={() => setShowLinks(!showLinks)}>
              HOME
            </li>
          </LinkRRD>
        )}
        <LinkRRD to="/solarsystem">
          <li className="nav-item" onClick={() => setShowLinks(!showLinks)}>
            OUR SOLAR SYSTEM
          </li>
        </LinkRRD>
      </ul>
      <button onClick={() => setShowLinks(!showLinks)}>
        <ReorderIcon />
      </button>
    </div>
  );
};

export default NavBar;
