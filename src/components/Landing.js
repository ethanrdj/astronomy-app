import React from "react";
import TypeWriter from "typewriter-effect";

import "../styles/Landing.css";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="headers">
        <h1 className="header">
          <TypeWriter
            onInit={(e) => {
              e.typeString("keep your space").start();
            }}
          />
        </h1>
        <h3 className="code-by">
          <TypeWriter
            onInit={(e) => {
              e.pauseFor(2000).typeString("Code by Ethan Davis").start();
            }}
          />
        </h3>
      </div>
    </div>
  );
};

export default Landing;
