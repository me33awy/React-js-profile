import "./index.scss";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import AOS from "aos";
import { useEffect } from "react";
import Img1 from "../../assets/images/desktop1.jpg";
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
      <div className="main" id="projects" data-aos="fade-up">
        <Container>
          <Row className="text-center">
            <h1 className="color-brown font-48 font-700">Projects</h1>
            <p className="color-light-gray font-600 font-18">
              Prototypes, Digital Products (Apps, Websites, SaaS solutions) and
              design systems which are visually pleasing, user-centric and easy
              to use.
            </p>
          </Row>
          <Row className="grid">
            <Card style={{ width: "18rem" }} className="bg-yellow-color">
              <Card.Body>
                <Card.Title className="font-32 font-700 ">
                  Interactive Card
                </Card.Title>
                <Card.Text>
                  Build an interactive card form for registration with credit
                  card or debit card
                </Card.Text>
              </Card.Body>
              <Card.Img variant="top" src={Img1} />
            </Card>
            <Card style={{ width: "18rem" }} className="bg-orange-color">
              <Card.Body>
                <Card.Title className="font-32 font-700 ">
                  Interactive Card
                </Card.Title>
                <Card.Text>
                  Build an interactive card form for registration with credit
                  card or debit card
                </Card.Text>
              </Card.Body>
              <Card.Img variant="top" src={Img1} />
            </Card>
            <Card style={{ width: "18rem" }} className="bg-green-color">
              <Card.Body>
                <Card.Title className="font-32 font-700 ">
                  Interactive Card
                </Card.Title>
                <Card.Text>
                  Build an interactive card form for registration with credit
                  card or debit card
                </Card.Text>
              </Card.Body>
              <Card.Img variant="top" src={Img1} />
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Projects;
