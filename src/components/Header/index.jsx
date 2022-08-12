import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header>
      <Navbar variant="dark" sticky="top" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Link to="/">
              {" "}
              <Nav.Link href="#home">
                <FontAwesomeIcon icon={faHouse} />
              </Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link href="#about">
                <FontAwesomeIcon icon={faUser} />
              </Nav.Link>
            </Link>
            <Link to="/projects">
              <Nav.Link href="#projects">
                <FontAwesomeIcon icon={faBriefcase} />
              </Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link href="#contact">
                <FontAwesomeIcon icon={faMessage} />
              </Nav.Link>
            </Link>
            <Link to="/capabilities">
              <Nav.Link href="#capabilities">
                <FontAwesomeIcon icon={faTerminal} />
              </Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
