import React from "react";
import "./index.scss";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <Container id="home">
      <main>
        <Outlet />
      </main>
    </Container>
  );
}

export default Main;
