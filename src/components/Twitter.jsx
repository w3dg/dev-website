import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

function Twitter() {
  return (
    <>
      <Navbar />
      <Container fixed id="twe">
        <main id="main">
          <div id="home-main">
            <h1>Tweets from me!</h1>
            <h2>Check out my Twitter! </h2>
            <Button
              variant="contained"
              color="primary"
              href="https://twitter.com/its_not_dg"
              target="_blank"
              rel="noopener noreferrer"
            >
              go to twitter
            </Button>
            <BottomNav />
          </div>
        </main>
      </Container>
    </>
  );
}

export default Twitter;
