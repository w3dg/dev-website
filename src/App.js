import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import Youtube from "./components/Youtube";
import Github from "./components/Github";
import Twitch from "./components/Twitch";
import Twitter from "./components/Twitter";
import Instagram from "./components/Instagram";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/youtube">
            <Youtube />
          </Route>
          <Route exact path="/twitch">
            <Twitch />
          </Route>
          <Route exact path="/github">
            <Github />
          </Route>
          <Route exact path="/twitter">
            <Twitter />
          </Route>
          <Route exact path="/instagram">
            <Instagram />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
