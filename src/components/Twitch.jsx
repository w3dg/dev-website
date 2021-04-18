import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

function Twitch() {
  return (
    <>
      <Navbar />
      <Container fixed id="twi">
        <main id="main">
          <div id="home-main">
            <h1>Follow me on Twitch!</h1>
            <h2>Let's head over to Twitch!</h2>
            <Button
              variant="contained"
              color="primary"
              href="https://www.twitch.tv/debopamgupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Twitch
            </Button>
            <BottomNav />
          </div>
        </main>
      </Container>
    </>
  );
}

export default Twitch;
