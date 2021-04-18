import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

function Instagram() {
  return (
    <>
      <Navbar />
      <Container fixed id="ig">
        <main id="main">
          <div id="home-main">
            <h1>Cool Clicks and Content!</h1>
            <h2>Head over to Instagram</h2>
            <Button
              variant="contained"
              color="secondary"
              href="https://www.instagram.com/its_not_dg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              go to instagram
            </Button>
            <BottomNav />
          </div>
        </main>
      </Container>
    </>
  );
}

export default Instagram;
