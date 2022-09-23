import "./index.scss";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import AOS from "aos";
import { useEffect } from "react";
import project1 from "../../assets/png/Landing.png";
import project2 from "../../assets/png/mobile-design.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Projects() {
  const user = {
    name: "Amr Mekkawy",
    age: 22,
    job: "Front-End Developer",
    skills: [
      " HTML",
      "CSS",
      " JavaScript",
      "Sass",
      "Git",
      "Github",
      "React",
      "React-BootStrap",
      "NodeJS ",
    ],
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <div id="projects" data-aos="fade-up">
        <Row className="gy-3">
          <Col xs={12} lg={6}>
            <Row>
              <Col xs={12}>
                {" "}
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12}>
                {" "}
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              {/* <Container> */}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Projects;
