import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation, Link as LinkRRD } from "react-router-dom";
import MerImg from "../images/mercury.png";
import MerImg2 from "../images/mercury2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Planets.css";

const Neptune = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="Planet">
      <div className="image-div">
        <img src={MerImg} alt="neptune" className="img-planet"></img>
        <div className="arrows mercury">
          <div className="left-arrow">
            <LinkRRD to="/venus">
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
        </div>
      </div>
      <div className="all-data" id="planet">
        <div className="planet-paragraphs">
          <h1 className="planet-main-headers">Mercury</h1>
          <div className="info-type">
            <h3>Size and Distance</h3>
            <hr />
            <p>
              With a radius of 1,516 miles (2,440 kilometers), Mercury is a
              little more than 1/3 the width of Earth. If Earth were the size of
              a nickel, Mercury would be about as big as a blueberry. From an
              average distance of 36 million miles (58 million kilometers),
              Mercury is 0.4 astronomical units away from the Sun. One
              astronomical unit (abbreviated as AU), is the distance from the
              Sun to Earth. From this distance, it takes sunlight 3.2 minutes to
              travel from the Sun to Mercury.
            </p>
          </div>

          <div className="info-type">
            <h3>Orbit and Rotation</h3>
            <hr />
            <p>
              Mercury's highly eccentric, egg-shaped orbit takes the planet as
              close as 29 million miles (47 million kilometers) and as far as 43
              million miles (70 million kilometers) from the Sun. It speeds
              around the Sun every 88 days, traveling through space at nearly 29
              miles (47 kilometers) per second, faster than any other planet.
              Mercury spins slowly on its axis and completes one rotation every
              59 Earth days. But when Mercury is moving fastest in its
              elliptical orbit around the Sun (and it is closest to the Sun),
              each rotation is not accompanied by a sunrise and sunset like it
              is on most other planets. The morning Sun appears to rise briefly,
              set and rise again from some parts of the planet's surface. The
              same thing happens in reverse at sunset for other parts of the
              surface. One Mercury solar day (one full day-night cycle) equals
              176 Earth days—just over two years on Mercury. Mercury's axis of
              rotation is tilted just 2 degrees with respect to the plane of its
              orbit around the Sun. That means it spins nearly perfectly upright
              and so does not experience seasons like many other planets do.
            </p>
          </div>

          <div className="info-type">
            <h3>Potential for Life</h3>
            <hr />
            <p>
              Mercury's environment is not conducive to life as we know it. The
              temperatures and solar radiation that characterize this planet are
              most likely too extreme for organisms to adapt to.
            </p>
          </div>
        </div>

        <div className="ff-all">
          <h3 className="planet-main-headers">Fast Facts</h3>
          <div className="fast-facts">
            <h4>Day length</h4>
            <p>176 Earth Days</p>
            <h4>Year length</h4>
            <p>88 Earth days</p>
            <h4>Radius</h4>
            <p>1,516 miles | 2,439.7 kilometers</p>
            <h4>Planet Type</h4>
            <p>Terrestrial</p>
            <h4>Number of Moons</h4>
            <p>0</p>
          </div>
          <img src={MerImg2} alt="MerImg" className="bottom-img"></img>
          <img src={MerImg} alt="jup2" className="bottom-img"></img>
        </div>
      </div>
    </div>
  );
};

export default Neptune;
