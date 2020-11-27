import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Landing from "./Landing";
import Apod from "./Apod";
import SSIntro from "./SS-Intro";
import Footer from "./Footer";
import Neptune from "./Neptune";
import Uranus from "./Uranus";
import Saturn from "./Saturn";
import Jupiter from "./Jupiter";
import Mars from "./Mars";
import Earth from "./Earth";
import Venus from "./Venus";
import Mercury from "./Mercury";
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
        <Route exact path="/uranus" component={Uranus}></Route>
        <Route exact path="/saturn" component={Saturn}></Route>
        <Route exact path="/jupiter" component={Jupiter}></Route>
        <Route exact path="/mars" component={Mars}></Route>
        <Route exact path="/earth" component={Earth}></Route>
        <Route exact path="/venus" component={Venus}></Route>
        <Route exact path="/mercury" component={Mercury}></Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
