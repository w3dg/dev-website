import React from "react";
import { Container, Button } from "@material-ui/core";
import Navbar from "./Navbar";

function Youtube() {
  return (
    <>
      <Navbar />
      <Container fixed id="yt">
        <main id="main">
          <div id="home-main">
            <h1>Check me out over on Youtube!</h1>
            <Button
              variant="contained"
              color="secondary"
              href="https://www.youtube.com/channel/UCrXTbv7MSiHSt1b8eWjaxAA"
            >
              Take me to Youtube
            </Button>
          </div>
        </main>
      </Container>
    </>
  );
}

export default Youtube;
