import React, { useEffect } from "react";
import telescope from "../images/telescope.png";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/Footer.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 150 });
  }, []);

  return (
    <div className="Footer">
      <div className="footer-all">
        <div data-aos="fade-up" className="footer-item">
          <h3 className="f-header">More from Me</h3>
          <p className="footer-para">
            I have been working on other projects, click the telescope to view
            my portfolio.
          </p>
          <a href="https://ethan-davis-portfolio.vercel.app/" target="_blank">
            <img src={telescope} alt="telescope" className="icon"></img>
          </a>
        </div>
        <div data-aos="fade-up" className="footer-item">
          <h3 className="f-header">More information</h3>
          <p className="footer-para">
            I have used NASAs website to gather all of the information, you can
            see it by clicking the telescope below.
          </p>
          <a
            href="https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/"
            target="_blank"
          >
            <img src={telescope} alt="telescope" className="icon"></img>
          </a>
        </div>
        <div data-aos="fade-up" className="footer-item">
          <h3 className="f-header">More APIs</h3>
          <p className="footer-para">
            The APOD picture uses one of NASAs open APIs, click the telescope to
            see what else they offer.
          </p>
          <a href="https://api.nasa.gov/" target="_blank">
            <img src={telescope} alt="telescope" className="icon"></img>
          </a>
        </div>
      </div>
      <hr></hr>
      <p className="me">©Code and Design by Ethan Davis</p>
    </div>
  );
};

export default Footer;
