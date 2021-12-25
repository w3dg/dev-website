import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      {/* Update Guide for v6 https://reactrouter.com/docs/en/v6/upgrading/v5#refactor-custom-routes */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/youtube" element={<Youtube />} />
          <Route exact path="/twitch" element={<Twitch />} />
          <Route exact path="/github" element={<Github />} />
          <Route exact path="/twitter" element={<Twitter />} />
          <Route exact path="/instagram" element={<Instagram />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
