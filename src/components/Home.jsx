import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Container fixed id="home">
        <main id="main">Hello from Home!</main>
      </Container>
    </>
  );
}

export default Home;
