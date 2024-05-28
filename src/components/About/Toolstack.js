import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import {
  SiVisualstudiocode,
  // SiEclipseide,
  // SiSlack,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
