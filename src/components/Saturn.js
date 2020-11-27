import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation, Link as LinkRRD } from "react-router-dom";
import SatImg from "../images/saturn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Planets.css";

const Saturn = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="Planet">
      <div className="image-div">
        <img src={SatImg} alt="neptune" className="img-planet"></img>
        <div className="arrows">
          <div className="left-arrow">
            <LinkRRD to="/uranus">
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
            <LinkRRD to="/jupiter">
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
          <h1 className="planet-main-headers">Saturn</h1>
          <div className="info-type">
            <h3>Size and Distance</h3>
            <hr />
            <p>
              With a radius of 36,183.7 miles (58,232 kilometers), Saturn is 9
              times wider than Earth. If Earth were the size of a nickel, Saturn
              would be about as big as a volleyball. From an average distance of
              886 million miles (1.4 billion kilometers), Saturn is 9.5
              astronomical units away from the Sun. One astronomical unit
              (abbreviated as AU), is the distance from the Sun to Earth. From
              this distance, it takes sunlight 80 minutes to travel from the Sun
              to Saturn.
            </p>
          </div>

          <div className="info-type">
            <h3>Orbit and Rotation</h3>
            <hr />
            <p>
              Saturn has the second-shortest day in the solar system. One day on
              Saturn takes only 10.7 hours (the time it takes for Saturn to
              rotate or spin around once), and Saturn makes a complete orbit
              around the Sun (a year in Saturnian time) in about 29.4 Earth
              years (10,756 Earth days). Its axis is tilted by 26.73 degrees
              with respect to its orbit around the Sun, which is similar to
              Earth's 23.5-degree tilt. This means that, like Earth, Saturn
              experiences seasons.
            </p>
          </div>

          <div className="info-type">
            <h3>Potential for Life</h3>
            <hr />
            <p>
              Saturn's environment is not conducive to life as we know it. The
              temperatures, pressures and materials that characterize this
              planet are most likely too extreme and volatile for organisms to
              adapt to. While planet Saturn is an unlikely place for living
              things to take hold, the same is not true of some of its many
              moons. Satellites like Enceladus and Titan, home to internal
              oceans, could possibly support life.
            </p>
          </div>
        </div>

        <div className="ff-all">
          <h3 className="planet-main-headers">Fast Facts</h3>
          <div className="fast-facts">
            <h4>Day length</h4>
            <p>10.7 hours</p>
            <h4>Year length</h4>
            <p>29 Earth years</p>
            <h4>Radius</h4>
            <p>36,183.7 miles | 58,232 kilometers</p>
            <h4>Planet Type</h4>
            <p>Gas giant</p>
            <h4>Number of Moons</h4>
            <p>53 confirmed | 29 provisional</p>
          </div>
          <img src={SatImg} alt="satimg" className="bottom-img"></img>
        </div>
      </div>
    </div>
  );
};

export default Saturn;
