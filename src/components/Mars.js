import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation, Link as LinkRRD } from "react-router-dom";
import MarsImg from "../images/mars.png";
import MarsImg2 from "../images/mars2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Planets.css";

const Mars = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="Planet">
      <div className="image-div">
        <img src={MarsImg} alt="neptune" className="img-planet"></img>
        <div className="arrows">
          <div className="left-arrow">
            <LinkRRD to="/jupiter">
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
            <LinkRRD to="/earth">
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
          <h1 className="planet-main-headers">Mars</h1>
          <div className="info-type">
            <h3>Size and Distance</h3>
            <hr />
            <p>
              With a radius of 2,106 miles (3,390 kilometers), Mars is about
              half the size of Earth. If Earth were the size of a nickel, Mars
              would be about as big as a raspberry. From an average distance of
              142 million miles (228 million kilometers), Mars is 1.5
              astronomical units away from the Sun. One astronomical unit
              (abbreviated as AU), is the distance from the Sun to Earth. From
              this distance, it takes sunlight 13 minutes to travel from the Sun
              to Mars.
            </p>
          </div>

          <div className="info-type">
            <h3>Orbit and Rotation</h3>
            <hr />
            <p>
              As Mars orbits the Sun, it completes one rotation every 24.6
              hours, which is very similar to one day on Earth (23.9 hours).
              Martian days are called sols—short for "solar day." A year on Mars
              lasts 669.6 sols, which is the same as 687 Earth days. Mars' axis
              of rotation is tilted 25 degrees with respect to the plane of its
              orbit around the Sun. This is another similarity with Earth, which
              has an axial tilt of 23.4 degrees. Like Earth, Mars has distinct
              seasons, but they last longer than seasons here on Earth since
              Mars takes longer to orbit the Sun (because it's farther away).
              And while here on Earth the seasons are evenly spread over the
              year, lasting 3 months (or one quarter of a year), on Mars the
              seasons vary in length because of Mars' elliptical, egg-shaped
              orbit around the Sun. Spring in the northern hemisphere (autumn in
              the southern) is the longest season at 194 sols. Autumn in the
              northern hemisphere (spring in the southern) is the shortest at
              142 days. Northern winter/southern summer is 154 sols, and
              northern summer/southern winter is 178 sols.
            </p>
          </div>

          <div className="info-type">
            <h3>Potential for Life</h3>
            <hr />
            <p>
              Scientists don't expect to find living things currently thriving
              on Mars. Instead, they're looking for signs of life that existed
              long ago, when Mars was warmer and covered with water.
            </p>
          </div>
        </div>

        <div className="ff-all">
          <h3 className="planet-main-headers">Fast Facts</h3>
          <div className="fast-facts">
            <h4>Day length</h4>
            <p>24.6 hours</p>
            <h4>Year length</h4>
            <p>669.6 sols | 687 Earth days</p>
            <h4>Radius</h4>
            <p>2,106 miles | 3,390 kilometers</p>
            <h4>Planet Type</h4>
            <p>Terrestrial</p>
            <h4>Number of Moons</h4>
            <p>2</p>
          </div>
          <img src={MarsImg2} alt="jupimg" className="bottom-img"></img>
          <img src={MarsImg} alt="jup2" className="bottom-img"></img>
        </div>
      </div>
    </div>
  );
};

export default Mars;
