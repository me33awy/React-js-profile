import React from "react";
import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <>
      <header className="d-flex justify-content-center align-items-center vh-100">
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <div className="tech-talk">
                <span>Code Talk </span>
              </div>
            </Col>
            <Col xs={12} lg={6}></Col>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default Header;
