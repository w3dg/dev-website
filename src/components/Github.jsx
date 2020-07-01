import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

function Github() {
  return (
    <>
      <Navbar />
      <Container fixed id="gh">
        <main id="main">
          <div id="home-main">
            <h1>Interested in my work ?</h1>
            <h2>Check out my Github Profile! </h2>
            <Button
              variant="contained"
              color="primary"
              href="https://github.com/debopamgupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              take me to Github
            </Button>
            <BottomNav />
          </div>
        </main>
      </Container>
    </>
  );
}

export default Github;
