import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Container fixed id="home">
        <main id="main">
          <div id="home-main">
            <h1>
              Hi! I am <br /> Debopam Gupta
            </h1>
            <p>
              <em>I am passionate about coding and love to relax! </em>
              <span role="img" aria-label="toungue-out-emoji">
                😜
              </span>
            </p>
          </div>
        </main>
      </Container>
    </>
  );
}

export default Home;
