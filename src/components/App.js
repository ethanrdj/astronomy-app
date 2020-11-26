import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Landing from "./Landing";
import Apod from "./Apod";
import SSIntro from "./SS-Intro";
import Footer from "./Footer";
import Neptune from "./Neptune";
import Particles from "react-particles-js";

import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing}>
          <Landing />
          <Apod />
        </Route>

        <Route exact path="/solarsystem" component={SSIntro}>
          <SSIntro />
        </Route>
        <Route exact path="/neptune" component={Neptune}></Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
