import React from "react";
import Landing from "./Landing";
import Apod from "./Apod";
import SSIntro from "./SS-Intro";
import SolarSystem from "./SolarSystem";
import Particles from "react-particles-js";

import "../styles/App.css";

const App = () => {
  const particleParams = {
    particles: {
      number: {
        value: 750,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      line_linked: {
        enable: true,
        opacity: 0.02,
      },
      move: {
        direction: "right",
        speed: 0.05,
      },
      size: {
        value: 2,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          particles_nb: 1,
        },
      },
    },
    retina_detect: true,
  };
  return (
    <div className="App">
      <SSIntro />
      <SolarSystem />
    </div>
  );
};

export default App;
