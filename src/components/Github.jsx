import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Navbar";

function Github() {
  return (
    <>
      <Navbar />
      <Container fixed id="gh">
        <main id="main">Hello from Github!</main>
      </Container>
    </>
  );
}

export default Github;
