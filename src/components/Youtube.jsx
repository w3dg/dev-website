import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Navbar";

function Youtube() {
  return (
    <>
      <Navbar />
      <Container fixed id="yt">
        <main id="main">Hello from Youtube!</main>
      </Container>
    </>
  );
}

export default Youtube;
