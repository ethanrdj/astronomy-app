import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation, Link as LinkRRD } from "react-router-dom";
import EarImg from "../images/earth.png";
import EarImg2 from "../images/earth2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Planets.css";

const Earth = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="Planet">
      <div className="image-div">
        <img src={EarImg} alt="neptune" className="img-planet"></img>
        <div className="arrows">
          <div className="left-arrow">
            <LinkRRD to="/mars">
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
            <LinkRRD to="/venus">
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
          <h1 className="planet-main-headers">Earth</h1>
          <div className="info-type">
            <h3>Size and Distance</h3>
            <hr />
            <p>
              With a radius of 3,959 miles (6,371 kilometers), Earth is the
              biggest of the terrestrial planets, and the fifth largest planet
              overall. From an average distance of 93 million miles (150 million
              kilometers), Earth is exactly one astronomical unit away from the
              Sun because one astronomical unit (abbreviated as AU), is the
              distance from the Sun to Earth. This unit provides an easy way to
              quickly compare planets' distances from the Sun. It takes about
              eight minutes for light from the Sun to reach our planet.
            </p>
          </div>

          <div className="info-type">
            <h3>Orbit and Rotation</h3>
            <hr />
            <p>
              As Earth orbits the Sun, it completes one rotation every 23.9
              hours. It takes 365.25 days to complete one trip around the Sun.
              That extra quarter of a day presents a challenge to our calendar
              system, which counts one year as 365 days. To keep our yearly
              calendars consistent with our orbit around the Sun, every four
              years we add one day. That day is called a leap day, and the year
              it's added to is called a leap year. Earth's axis of rotation is
              tilted 23.4 degrees with respect to the plane of Earth's orbit
              around the Sun. This tilt causes our yearly cycle of seasons.
              During part of the year, the northern hemisphere is tilted toward
              the Sun and the southern hemisphere is tilted away. With the Sun
              higher in the sky, solar heating is greater in the north producing
              summer there. Less direct solar heating produces winter in the
              south. Six months later, the situation is reversed. When spring
              and fall begin, both hemispheres receive roughly equal amounts of
              heat from the Sun.
            </p>
          </div>

          <div className="info-type">
            <h3>Potential for Life</h3>
            <hr />
            <p>
              Earth has a very hospitable temperature and mix of chemicals that
              have made life possible here. Most notably, Earth is unique in
              that most of our planet is covered in water, since the temperature
              allows liquid water to exist for extended periods of time. Earth's
              vast oceans provided a convenient place for life to begin about
              3.8 billion years ago.
            </p>
          </div>
        </div>

        <div className="ff-all">
          <h3 className="planet-main-headers">Fast Facts</h3>
          <div className="fast-facts">
            <h4>Day length</h4>
            <p>23.9 hours</p>
            <h4>Year length</h4>
            <p>365.25 days</p>
            <h4>Radius</h4>
            <p>3,959 miles | 6,371 kilometers</p>
            <h4>Planet Type</h4>
            <p>Terrestrial</p>
            <h4>Number of Moons</h4>
            <p>1</p>
          </div>
          <img src={EarImg2} alt="EarImg" className="bottom-img"></img>
          <img src={EarImg} alt="earth" className="bottom-img"></img>
        </div>
      </div>
    </div>
  );
};

export default Earth;
