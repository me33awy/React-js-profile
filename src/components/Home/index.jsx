import "./index.scss";
import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cv from "../../assets/pdf/Experience.pdf";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import person from "../../assets/images/Portrait.png";
import Container from "react-bootstrap/esm/Container";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
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
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <main id="home">
        <Container>
          <Row data-aos="fade-up">
            <Col xs={12} lg={6}>
              {" "}
              <div className="log">
                <h1 className="font-72 font-800 color-brown">{user.job}</h1>
                <p className="font-500 font-18 color-light-gray">
                  Hi there, {user.name} &#128400;Expert in front-end development
                  including technologies like
                  {user.skills[0]}, {user.skills[1]},{user.skills[2]},{" "}
                  {user.skills[3]}, {user.skills[4]}, {user.skills[5]},{" "}
                  {user.skills[6]}, {user.skills[7]}, {user.skills[8]},{" "}
                  {user.skills[9]} I’m not a designer but I have a good sense of
                  aesthetics, and experience in responsive, mobile-first web
                  design.
                </p>
                <a download href={cv}>
                  {" "}
                  <Button
                    variant="primary"
                    className="bg-brown border-none padding-block-btn padding-mobile-btn font-500 font-18 box-shadow"
                  >
                    Download Resume
                    <FontAwesomeIcon icon={faDownload} />
                  </Button>{" "}
                </a>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              {" "}
              <div className="img bg-brown box-shadow radius">
                <img src={person} alt={user.name} />
              </div>{" "}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Home;
