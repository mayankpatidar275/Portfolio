import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="NFT Marketplace"
              description="NFT Marketplace platform for creating, buying and selling NFTs - build with react.js, ether.js, hardhat, solidity and deployed on sepolia testnet. It has complete ui but currently wallet connection, NFTs creation and NFTs display features are fully functional. "
              ghLink="https://github.com/mayankpatidar275/NFT-Marketplace"
              demoLink="https://nft-marketplace-mkpatidar.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Voting dapp"
              description="An e-voting system where the votes data is stored on blockchain hence can not be altered - Build with react.js, web3.js, truffle, solidity and deployed on ethereum testnet."
              ghLink="https://github.com/mayankpatidar275/Voting-dapp"
              demoLink="https://e-voting-system-mkpatidar.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Runner game"
              description="Run and jump the obstacles to score high - build with Vanilla Javascript and animations by css"
              ghLink="https://github.com/mayankpatidar275/Game"
              demoLink="https://runner-game-mkpatidar.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Keyboard Drum"
              description="Super cool drum :) Press keys to play drum - build using Vanilla Javascript."
              ghLink="https://github.com/mayankpatidar275/drum_project"
              demoLink="https://keyboard-drum-mkpatidar.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Smart contracts"
              description="Smart contract in solidity for Lottery, crowd funding, blood donation, event organization and credit system."
              ghLink="https://github.com/mayankpatidar275?tab=repositories"
                />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
