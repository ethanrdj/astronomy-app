import React, { useEffect } from "react";
import neptune from "../images/neptune.png";
import uranus from "../images/uranus.png";
import saturn from "../images/saturn.png";
import jupiter from "../images/jupiter.png";
import mars from "../images/mars.png";
import earth from "../images/earth.png";
import venus from "../images/venus.png";
import mercury from "../images/mercury.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/SolarSystem.css";

const SolarSystem = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 150 });
  }, []);

  return (
    <div className="SolarSystem" id="planets">
      <div>
        <h2 className="main-heading">
          The Planets in Our<br></br>
          <span
            style={{
              color: "#008080",
            }}
          >
            Solar System
          </span>
        </h2>
        <div className="all-planets">
          <div data-aos="fade-up" className="planet">
            <h2
              data-aos="fade-down"
              data-aos-duration="750"
              className="planet-name"
            >
              Neptune
            </h2>
            <div className="planet-info">
              <p>
                Dark, cold and whipped by supersonic winds, ice giant Neptune is
                the eighth and most distant planet in our solar system.
              </p>
              <p>
                More than 30 times as far from the Sun as Earth, Neptune is the
                only planet in our solar system not visible to the naked eye and
                the first predicted by mathematics before its discovery. In 2011
                Neptune completed its first 165-year orbit since its discovery
                in 1846.
              </p>
              <Link to="/neptune">
                <button className="lm-button">Learn more</button>
              </Link>
            </div>
            <img src={neptune} alt="neptune" className="planet-img"></img>
          </div>

          <div data-aos="fade-right" className="planet">
            <h2
              data-aos="fade-down"
              data-aos-duration="750"
              className="planet-name"
            >
              Uranus
            </h2>
            <div className="left">
              <div className="planet-info">
                <p>
                  The seventh planet from the Sun with the third largest
                  diameter in our solar system, Uranus is very cold and windy.
                </p>
                <p>
                  The ice giant is surrounded by 13 faint rings and 27 small
                  moons as it rotates at a nearly 90-degree angle from the plane
                  of its orbit. This unique tilt makes Uranus appear to spin on
                  its side, orbiting the Sun like a rolling ball.
                </p>
                <Link to="/uranus">
                  <button className="lm-button">Learn more</button>
                </Link>
              </div>
              <img src={uranus} alt="uranus" className="planet-img"></img>
            </div>
          </div>
          <div data-aos="fade-left" className="planet">
            <h2
              data-aos="fade-down"
              data-aos-duration="750"
              className="planet-name"
            >
              Saturn
            </h2>
            <div className="planet-info">
              <p>
                Saturn is the sixth planet from the Sun and the second largest
                planet in our solar system.
              </p>
              <p>
                Adorned with a dazzling system of icy rings, Saturn is unique
                among the planets. It is not the only planet to have rings, but
                none are as spectacular or as complex as Saturn's. Like fellow
                gas giant Jupiter, Saturn is a massive ball made mostly of
                hydrogen and helium.
              </p>
              <Link to="/saturn">
                <button className="lm-button">Learn more</button>
              </Link>
            </div>

            <img src={saturn} alt="saturn" className="planet-img"></img>
          </div>
          <div data-aos="fade-right" className="planet">
            <h2
              data-aos="fade-down"
              data-aos-duration="750"
              className="planet-name"
            >
              Jupiter
            </h2>
            <div className="left">
              <div className="planet-info">
                <p>
                  Jupiter is the fifth planet from our Sun and is, by far, the
                  largest planet in the solar system – more than twice as
                  massive as all the other planets combined.
                </p>
                <p>
                  Jupiter's stripes and swirls are actually cold, windy clouds
                  of ammonia and water, floating in an atmosphere of hydrogen
                  and helium. Jupiter’s iconic Great Red Spot is a giant storm
                  bigger than Earth that has raged for hundreds of years.
                </p>
                <Link to="/jupiter">
                  <button className="lm-button">Learn more</button>
                </Link>
              </div>

              <img src={jupiter} alt="jupiter" className="planet-img"></img>
            </div>
          </div>
          <div data-aos="fade-left" className="planet">
            <h2
              data-aos="fade-down"
              data-aos-duration="750"
              className="planet-name"
            >
              Mars
            </h2>
            <div className="planet-info">
              <p>
                The fourth planet from the Sun, Mars is a dusty, cold, desert
                world with a very thin atmosphere.
              </p>
              <p>
                This dynamic planet has seasons, polar ice caps, canyons,
                extinct volcanoes, and evidence that it was even more active in
                the past. Mars is one of the most explored bodies in our solar
                system, and it's the only planet where we've sent rovers to roam
                the alien landscape.
              </p>
              <Link to="/mars">
                <button className="lm-button">Learn more</button>
              </Link>
            </div>
            <img src={mars} alt="mars" className="planet-img"></img>
          </div>
          <div data-aos="fade-right" className="planet">
            <h2
              data-aos="fade-down"
              data-aos-duration="750"
              className="planet-name"
            >
              Earth
            </h2>
            <div className="left">
              <div className="planet-info">
                <p>
                  Our home planet is the third planet from the Sun, and the only
                  place we know of so far that’s inhabited by living things.
                </p>
                <p>
                  While Earth is only the fifth largest planet in the solar
                  system, it is the only world in our solar system with liquid
                  water on the surface. Just slightly larger than nearby Venus,
                  Earth is the biggest of the four planets closest to the Sun,
                  all of which are made of rock and metal.
                </p>
                <Link to="/earth">
                  <button className="lm-button">Learn more</button>
                </Link>
              </div>
              <img src={earth} alt="earth" className="planet-img"></img>
            </div>
          </div>
          <div data-aos="fade-left" className="planet">
            <h2
              data-aos="fade-down"
              data-aos-duration="750"
              className="planet-name"
            >
              Venus
            </h2>
            <div className="planet-info">
              <p>
                Venus is the second planet from the Sun and our closest
                planetary neighbor.
              </p>
              <p>
                Similar in structure and size to Earth, Venus spins slowly in
                the opposite direction from most planets. Its thick atmosphere
                traps heat in a runaway greenhouse effect, making it the hottest
                planet in our solar system with surface temperatures hot enough
                to melt lead. Glimpses below the clouds reveal volcanoes and
                deformed mountains.
              </p>
              <Link to="/venus">
                <button className="lm-button">Learn more</button>
              </Link>
            </div>
            <img src={venus} alt="venus" className="planet-img"></img>
          </div>
          <div data-aos="fade-right" className="planet">
            <h2
              data-aos="fade-down"
              data-aos-duration="750"
              className="planet-name"
            >
              Mercury
            </h2>
            <div className="left">
              <div className="planet-info">
                <p>
                  The smallest planet in our solar system and nearest to the
                  Sun, Mercury is only slightly larger than Earth's Moon.
                </p>
                <p>
                  From the surface of Mercury, the Sun would appear more than
                  three times as large as it does when viewed from Earth, and
                  the sunlight would be as much as seven times brighter.
                </p>
                <Link to="/mercury">
                  <button className="lm-button">Learn more</button>
                </Link>
              </div>

              <img src={mercury} alt="mercury" className="planet-img"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
