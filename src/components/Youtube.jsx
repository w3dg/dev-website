import React from "react";
import { Container, Button } from "@material-ui/core";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

function Youtube() {
  return (
    <>
      <Navbar />
      <Container fixed id="yt">
        <main id="main">
          <div id="home-main">
            <h1>Woah! A Youtube channel?</h1>
            <h2>Let's head to Youtube!</h2>
            <Button
              variant="contained"
              color="secondary"
              href="https://www.youtube.com/channel/UCrXTbv7MSiHSt1b8eWjaxAA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Take me to Youtube
            </Button>
            <BottomNav />
          </div>
        </main>
      </Container>
    </>
  );
}

export default Youtube;
