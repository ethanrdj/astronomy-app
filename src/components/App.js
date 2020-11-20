import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Landing from "./Landing";
import Apod from "./Apod";
import SSIntro from "./SS-Intro";
import SolarSystem from "./SolarSystem";
import Particles from "react-particles-js";

import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing}>
          <Landing />
        </Route>

        <Route>
          <SSIntro exact path="/solarsystem" component={SSIntro} />
        </Route>
      </Switch>
      <Apod />
    </div>
  );
};

export default App;
