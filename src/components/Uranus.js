import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation, Link as LinkRRD } from "react-router-dom";
import UraImg from "../images/uranus.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Planets.css";

const Uranus = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="Planet">
      <div className="image-div">
        <img src={UraImg} alt="neptune" className="img-planet"></img>
        <div className="arrows">
          <div className="left-arrow">
            <LinkRRD to="/neptune">
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
            <LinkRRD to="/saturn">
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
          <h1 className="planet-main-headers">Uranus</h1>
          <div className="info-type">
            <h3>Size and Distance</h3>
            <hr />
            <p>
              With a radius of 15,759.2 miles (25,362 kilometers), Uranus is 4
              times wider than Earth. If Earth was the size of a nickel, Uranus
              would be about as big as a softball. From an average distance of
              1.8 billion miles (2.9 billion kilometers), Uranus is 19.8
              astronomical units away from the Sun. One astronomical unit
              (abbreviated as AU), is the distance from the Sun to Earth. From
              this distance, it takes sunlight 2 hours and 40 minutes to travel
              from the Sun to Uranus.
            </p>
          </div>

          <div className="info-type">
            <h3>Orbit and Rotation</h3>
            <hr />
            <p>
              One day on Uranus takes about 17 hours (the time it takes for
              Uranus to rotate or spin once). And Uranus makes a complete orbit
              around the Sun (a year in Uranian time) in about 84 Earth years
              (30,687 Earth days). Uranus is the only planet whose equator is
              nearly at a right angle to its orbit, with a tilt of 97.77
              degrees—possibly the result of a collision with an Earth-sized
              object long ago. This unique tilt causes the most extreme seasons
              in the solar system. For nearly a quarter of each Uranian year,
              the Sun shines directly over each pole, plunging the other half of
              the planet into a 21-year-long, dark winter. Uranus is also one of
              just two planets that rotate in the opposite direction than most
              of the planets (Venus is the other one), from east to west.
            </p>
          </div>

          <div className="info-type">
            <h3>Potential for Life</h3>
            <hr />
            <p>
              Uranus' environment is not conducive to life as we know it. The
              temperatures, pressures and materials that characterize this
              planet are most likely too extreme and volatile for organisms to
              adapt to.
            </p>
          </div>
        </div>

        <div className="ff-all">
          <h3 className="planet-main-headers">Fast Facts</h3>
          <div className="fast-facts">
            <h4>Day length</h4>
            <p>17 hours 14 minutes</p>
            <h4>Year length</h4>
            <p>84 Earth years</p>
            <h4>Radius</h4>
            <p>15,759.2 miles | 25,362 kilometers</p>
            <h4>Planet Type</h4>
            <p>Ice Giant</p>
            <h4>Number of Moons</h4>
            <p>27</p>
          </div>
          <img src={UraImg} alt="uraimg" className="bottom-img"></img>
        </div>
      </div>
    </div>
  );
};

export default Uranus;
