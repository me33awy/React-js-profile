import "./index.scss";
import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cv from "../../assets/pdf/2.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import person from "../../assets/images/Portrait.png";
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
  return (
    <>
      <>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            {" "}
            <div className="log">
              <h1>{user.job}&#127947;</h1>
              <p>
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
                <Button variant="primary">
                  Download Resume
                  <FontAwesomeIcon icon={faDownload} />
                </Button>{" "}
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={5}>
            {" "}
            <div className="img">
              <img src={person} alt="" />
            </div>{" "}
          </Col>
        </Row>
      </>
    </>
  );
}

export default Home;
