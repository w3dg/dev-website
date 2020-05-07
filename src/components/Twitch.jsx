import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Navbar";

function Twitch() {
  return (
    <>
      <Navbar />
      <Container fixed id="twi">
        <main id="main">Hello from Twitch!</main>
      </Container>
    </>
  );
}

export default Twitch;
