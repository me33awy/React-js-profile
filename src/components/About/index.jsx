import "./index.scss";
import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import person from "../../assets/images/aboutPortrait.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/esm/Container";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import * as Icons from "react-bootstrap-icons";
function About() {
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
        <div className="main d-flex align-items-center" id="about">
          <Row data-aos="fade-up" className="gy-3">
            <Col xs={12} lg={6} className=" d-flex align-items-center">
              {" "}
              <div className="log">
                <p className="color-light-gray font-18 font-500">
                  I’m a very ambitious {user.job} &#127912; looking for a role
                  in established IT company with the opportunity to work with
                  the latest technologies on challenging and diverse projects.
                  I'm quietly confident, naturally curious, and perpetually
                  working on improving my chops one design problem at a time. If
                  I need to define myself in one sentence that would be a family
                  person &#128106;, father of a beautiful daughter &#128103;,
                  photography enthusiast &#128247;,and tech-obsessed!!!. I put
                  special effort into optimizing my code and providing the best
                  user experience.I guarantee a commitment during work on your
                  project.
                </p>
                <a href="#projects">
                  {" "}
                  <Button
                    variant="primary"
                    className="bg-brown border-none padding-block-btn padding-mobile-btn font-500 font-18 box-shadow"
                  >
                    View my work <Icons.BriefcaseFill />
                    {/* <FontAwesomeIcon icon={faBriefcase} /> */}
                  </Button>{" "}
                </a>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              {" "}
              <div className="img bg-brown box-shadow radius">
                <img src={person} alt={user.name} />
              </div>
            </Col>
          </Row>
        </div>
    </>
  );
}

export default About;
