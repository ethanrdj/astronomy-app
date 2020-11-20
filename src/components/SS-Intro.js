import React from "react";
import { Link } from "react-scroll";
import SolarSystem from "./SolarSystem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

import "../styles/SS-Intro.css";

const SSIntro = () => {
  return (
    <>
      <div className="ss-intro">
        <h1>Our Solar System</h1>
        <p>
          Our solar system consists of our star, the Sun, and everything bound
          to it by gravity — the planets Mercury, Venus, Earth, Mars, Jupiter,
          Saturn, Uranus and Neptune, dwarf planets such as Pluto, dozens of
          moons and millions of asteroids, comets and meteoroids.
        </p>
        <h3>Why Is It Called The "Solar" System?</h3>
        <p>
          There are many planetary systems like ours in the universe, with
          planets orbiting a host star. Our planetary system is named the
          "solar" system because our Sun is named Sol, after the Latin word for
          Sun, "solis," and anything related to the Sun we call "solar."
        </p>
        <h5>Click the arrow to see the planets.</h5>
        <Link
          activeClass="active"
          to="planets"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <span className="scroll-button">
            <FontAwesomeIcon
              icon={faChevronCircleDown}
              size="2x"
              color="#008080"
              style={{ cursor: "pointer" }}
            />
          </span>
        </Link>
      </div>
      <SolarSystem />
    </>
  );
};

export default SSIntro;
