import "../styles/App.css";
import Apod from "./Apod";
import Particles from "react-particles-js";

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
      <Particles
        params={particleParams}
        style={{ position: "relative", height: "100%" }}
      />
      <p>
        This is a long paragraph This is a long paragraph This is a long
        paragraph This is a long paragraph This is a long paragraph This is a
        long paragraph This is a long paragraph This is a long paragraph
      </p>
    </div>
  );
};

export default App;
