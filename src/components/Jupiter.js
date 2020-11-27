import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation, Link as LinkRRD } from "react-router-dom";
import JupImg from "../images/jupiter.png";
import JupImg2 from "../images/jupiter2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Planets.css";

const Jupiter = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="Planet">
      <div className="image-div">
        <img src={JupImg} alt="neptune" className="img-planet"></img>
        <div className="arrows">
          <div className="left-arrow">
            <LinkRRD to="/saturn">
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                size="2x"
                color="#008080"
                style={{ cursor: "pointer" }}
              />
            </LinkRRD>
          </div>
          <div className="scroll-button-planet">
            <Link
              activeClass="active"
              to="planet"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <FontAwesomeIcon
                icon={faChevronCircleDown}
                size="2x"
                color="#008080"
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>
          <div className="right-arrow">
            <LinkRRD to="/mars">
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                size="2x"
                color="#008080"
                style={{ cursor: "pointer" }}
              />
            </LinkRRD>
          </div>
        </div>
      </div>
      <div className="all-data" id="planet">
        <div className="planet-paragraphs">
          <h1 className="planet-main-headers">Jupiter</h1>
          <div className="info-type">
            <h3>Size and Distance</h3>
            <hr />
            <p>
              With a radius of 43,440.7 miles (69,911 kilometers), Jupiter is 11
              times wider than Earth. If Earth were the size of a nickel,
              Jupiter would be about as big as a basketball. From an average
              distance of 484 million miles (778 million kilometers), Jupiter is
              5.2 astronomical units away from the Sun. One astronomical unit
              (abbreviated as AU), is the distance from the Sun to Earth. From
              this distance, it takes Sunlight 43 minutes to travel from the Sun
              to Jupiter.
            </p>
          </div>

          <div className="info-type">
            <h3>Orbit and Rotation</h3>
            <hr />
            <p>
              Jupiter has the shortest day in the solar system. One day on
              Jupiter takes only about 10 hours (the time it takes for Jupiter
              to rotate or spin around once), and Jupiter makes a complete orbit
              around the Sun (a year in Jovian time) in about 12 Earth years
              (4,333 Earth days). Its equator is tilted with respect to its
              orbital path around the Sun by just 3 degrees. This means Jupiter
              spins nearly upright and does not have seasons as extreme as other
              planets do.
            </p>
          </div>

          <div className="info-type">
            <h3>Potential for Life</h3>
            <hr />
            <p>
              Jupiter’s environment is probably not conducive to life as we know
              it. The temperatures, pressures and materials that characterize
              this planet are most likely too extreme and volatile for organisms
              to adapt to. While planet Jupiter is an unlikely place for living
              things to take hold, the same is not true of some of its many
              moons. Europa is one of the likeliest places to find life
              elsewhere in our solar system. There is evidence of a vast ocean
              just beneath its icy crust, where life could possibly be
              supported.
            </p>
          </div>
        </div>

        <div className="ff-all">
          <h3 className="planet-main-headers">Fast Facts</h3>
          <div className="fast-facts">
            <h4>Day length</h4>
            <p>9.93 hours</p>
            <h4>Year length</h4>
            <p>11.86 Earth Years</p>
            <h4>Radius</h4>
            <p>43,440.9 miles | 69,911 kilometers</p>
            <h4>Planet Type</h4>
            <p>Gas Giant</p>
            <h4>Number of Moons</h4>
            <p>53 confirmed | 26 provisional (79 total)</p>
          </div>
          <img src={JupImg2} alt="jupimg" className="bottom-img"></img>
          <img src={JupImg} alt="jup2" className="bottom-img"></img>
        </div>
      </div>
    </div>
  );
};

export default Jupiter;
