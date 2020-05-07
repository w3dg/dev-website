import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Container id="home">Hello from home </Container>
    </>
  );
}

export default Home;
