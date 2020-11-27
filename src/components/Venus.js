import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation, Link as LinkRRD } from "react-router-dom";
import VenImg from "../images/venus.png";
import VenImg2 from "../images/venus2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Planets.css";

const Venus = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="Planet">
      <div className="image-div">
        <img src={VenImg} alt="neptune" className="img-planet"></img>
        <div className="arrows">
          <div className="left-arrow">
            <LinkRRD to="/earth">
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
            <LinkRRD to="/mercury">
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
          <h1 className="planet-main-headers">Venus</h1>
          <div className="info-type">
            <h3>Size and Distance</h3>
            <hr />
            <p>
              With a radius of 3,760 miles (6,052 kilometers), Venus is roughly
              the same size as Earth — just slightly smaller. From an average
              distance of 67 million miles (108 million kilometers), Venus is
              0.7 astronomical units away from the Sun. One astronomical unit
              (abbreviated as AU), is the distance from the Sun to Earth. It
              takes sunlight 6 minutes to travel from the Sun to Venus.
            </p>
          </div>

          <div className="info-type">
            <h3>Orbit and Rotation</h3>
            <hr />
            <p>
              Venus' rotation and orbit are unusual in several ways. Venus is
              one of just two planets that rotate from east to west. Only Venus
              and Uranus have this "backwards" rotation. It completes one
              rotation in 243 Earth days — the longest day of any planet in our
              solar system, even longer than a whole year on Venus. But the Sun
              doesn't rise and set each "day" on Venus like it does on most
              other planets. On Venus, one day-night cycle takes 117 Earth days
              because Venus rotates in the direction opposite of its orbital
              revolution around the Sun. Venus makes a complete orbit around the
              Sun (a year in Venusian time) in 225 Earth days or slightly less
              than two Venusian day-night cycles. Its orbit around the Sun is
              the most circular of any planet — nearly a perfect circle. Other
              planet's orbits are more elliptical, or oval-shaped. With an axial
              tilt of just 3 degrees, Venus spins nearly upright, and so does
              not experience noticeable seasons.
            </p>
          </div>

          <div className="info-type">
            <h3>Potential for Life</h3>
            <hr />
            <p>
              No human has visited Venus, but the spacecraft that have been sent
              to the surface of Venus do not last very long there. Venus' high
              surface temperatures overheat electronics in spacecraft in a short
              time, so it seems unlikely that a person could survive for long on
              the Venusian surface. There is speculation about life existing in
              Venus' distant past, as well as questions about the possibility of
              life in the top cloud layers of Venus' atmosphere, where the
              temperatures are less extreme.
            </p>
          </div>
        </div>

        <div className="ff-all">
          <h3 className="planet-main-headers">Fast Facts</h3>
          <div className="fast-facts">
            <h4>Day length</h4>
            <p>243 Earth days</p>
            <h4>Year length</h4>
            <p>225 Earth Years</p>
            <h4>Radius</h4>
            <p>3,760 miles | 6,052 kilometers</p>
            <h4>Planet Type</h4>
            <p>Terrestrial</p>
            <h4>Number of Moons</h4>
            <p>0</p>
          </div>
          <img src={VenImg2} alt="VenImg" className="bottom-img"></img>
          <img src={VenImg} alt="VenImg" className="bottom-img"></img>
        </div>
      </div>
    </div>
  );
};

export default Venus;
