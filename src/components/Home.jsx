import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

function Home() {
  return (
    <>
      <Navbar />
      <Container fixed id="home">
        <main id="main">
          <div id="home-main">
            <h1>
              Hi there! <br /> I am Debopam Gupta
            </h1>
            <h2>
              <em>
                I am passionate about coding and i love to learn new stuff!
              </em>
            </h2>
            <BottomNav />
          </div>
        </main>
      </Container>
    </>
  );
}

export default Home;
