import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ fontSize: "1.1em" }}>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am a passionate<b className="purple"> Software Engineer </b>
            from <b className="purple"> Indore, India.</b>
            <br /> I have done my B-tech from <b className="purple"> IIIT Nagpur.</b>
            <br />
            I am currently working as a <b className="purple"> Software Developer</b> at ThinkMetal Pvt. Ltd.
            <br />
            <br />
            I enjoy building diverse projects, with a strong focus on creating innovative &nbsp;

            <b className="purple">Software Solutions. </b>

            <br />I am fluent in classics like

            <b className="purple"> Javascript and DSA. </b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing mouth organ
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Mayank</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
