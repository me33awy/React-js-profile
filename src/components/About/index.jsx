import "./index.scss";
import React from "react";
import Button from "react-bootstrap/Button";
import cv from "../../assets/pdf/2.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import person from "../../assets/images/aboutPortrait.png";
function About() {
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6}>
          {" "}
          <div className="log">
            <h1>Hi there, I'm Amr Mekkawy</h1>
            <p>
              I’m a very ambitious front-end developer looking for a role in
              established IT company with the opportunity to work with the
              latest technologies on challenging and diverse projects. I'm
              quietly confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time. If I need to
              define myself in one sentence that would be a family person,
              father of a beautiful daughter, photography enthusiast, and
              tech-obsessed!!!. I put special effort into optimizing my code and
              providing the best user experience. I would love to give you any
              kind of support also after the project's completion. I guarantee a
              commitment during work on your project.
            </p>
            <a download href={cv}>
              {" "}
              <Button variant="primary">Download Resume</Button>{" "}
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
  );
}

export default About;
