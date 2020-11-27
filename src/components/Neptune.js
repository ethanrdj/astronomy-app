import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation, Link as LinkRRD } from "react-router-dom";
import Nepimg from "../images/neptune.png";
import Nepimg2 from "../images/neptune2.png";
import Nepimg3 from "../images/neptune3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleRight,
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
        <img src={Nepimg} alt="neptune" className="img-planet"></img>
        <div className="arrows neptune">
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
            <LinkRRD to="/uranus">
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
          <h1 className="planet-main-headers">Neptune</h1>
          <div className="info-type">
            <h3>Size and Distance</h3>
            <hr />
            <p>
              With a radius of 15,299.4 miles (24,622 kilometers), Neptune is
              about four times wider than Earth. If Earth were the size of a
              nickel, Neptune would be about as big as a baseball. From an
              average distance of 2.8 billion miles (4.5 billion kilometers),
              Neptune is 30 astronomical units away from the Sun. One
              astronomical unit (abbreviated as AU), is the distance from the
              Sun to Earth. From this distance, it takes sunlight 4 hours to
              travel from the Sun to Neptune.
            </p>
          </div>

          <div className="info-type">
            <h3>Orbit and Rotation</h3>
            <hr />
            <p>
              One day on Neptune takes about 16 hours (the time it takes for
              Neptune to rotate or spin once). And Neptune makes a complete
              orbit around the Sun (a year in Neptunian time) in about 165 Earth
              years (60,190 Earth days). Sometimes Neptune is even farther from
              the Sun than dwarf planet Pluto. Pluto's highly eccentric,
              oval-shaped orbit brings it inside Neptune's orbit for a 20-year
              period every 248 Earth years. This switch, in which Pluto is
              closer to the Sun than Neptune, happened most recently from 1979
              to 1999. Pluto can never crash into Neptune, though, because for
              every three laps Neptune takes around the Sun, Pluto makes two.
              This repeating pattern prevents close approaches of the two
              bodies. Neptune’s axis of rotation is tilted 28 degrees with
              respect to the plane of its orbit around the Sun, which is similar
              to the axial tilts of Mars and Earth. This means that Neptune
              experiences seasons just like we do on Earth; however, since its
              year is so long, each of the four seasons lasts for over 40 years.
            </p>
          </div>

          <div className="info-type">
            <h3>Potential for Life</h3>
            <hr />
            <p>
              Neptune's environment is not conducive to life as we know it. The
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
            <p>16 Hours</p>
            <h4>Year length</h4>
            <p>165 Earth years</p>
            <h4>Radius</h4>
            <p>15,299.4 miles | 24,622 kilometers</p>
            <h4>Planet Type</h4>
            <p>Ice Giant</p>
            <h4>Number of Moons</h4>
            <p>14</p>
          </div>
          <img src={Nepimg2} alt="nep2" className="bottom-img"></img>
          <img src={Nepimg3} alt="nep3" className="bottom-img"></img>
        </div>
      </div>
    </div>
  );
};

export default Neptune;
