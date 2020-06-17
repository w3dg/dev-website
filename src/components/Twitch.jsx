import React from "react";
import { Container, Button } from "@material-ui/core";
import Navbar from "./Navbar";

function Twitch() {
  return (
    <>
      <Navbar />
      <Container fixed id="twi">
        <main id="main">
          <div id="home-main">
            <h1>Let's head over to Twitch!</h1>
            <Button
              variant="contained"
              color="primary"
              href="https://www.twitch.tv/debopamgupta"
            >
              Take me to Twitch
            </Button>
          </div>
        </main>
      </Container>
    </>
  );
}

export default Twitch;
