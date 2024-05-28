import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import keyboardDrum from "../../Assets/Projects/keyboardDrum.png";
import runnerGame from "../../Assets/Projects/runnerGame.png";
import nftMarketplace from "../../Assets/Projects/nftMarketplace.png";
import smartContracts from "../../Assets/Projects/smartContracts.png";
import votingSystem from "../../Assets/Projects/votingSystem.png";
import entertainmentHub from "../../Assets/Projects/entertainmentHub.png";
import fileServer from "../../Assets/Projects/fileServer.png"

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
              imgPath={fileServer}
              isBlog={false}
              title="File server"
              description="This desktop application enables you to effortlessly select and share directories from your system across the
              local network, operating in a read-only mode. It automatically detects the running servers in the network at the client-side. Seamless navigation through served files and folders using the integrated file explorer upon connecting to any
              available server via the client interface."
              ghLink="https://github.com/mayankpatidar275/file-server"
              demoLink="https://github.com/mayankpatidar275/file-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={entertainmentHub}
              isBlog={false}
              title="Entertainment hub"
              description="It is a full-stack project with implemented authentication, and it currently features these fun activities: Jokes generator, Jump the obstacles game - css animations, Keyboard drum, Bubble game."
              ghLink="https://github.com/mayankpatidar275/entertainment-hub"
              demoLink="https://entertainment-hub-mkpatidar.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nftMarketplace}
              isBlog={false}
              title="NFT Marketplace"
              description="NFT Marketplace platform for creating, buying and selling NFTs - build with react.js, ether.js, hardhat, solidity and deployed on sepolia testnet. It has complete ui but currently wallet connection, NFTs creation and NFTs display features are fully functional. "
              ghLink="https://github.com/mayankpatidar275/NFT-Marketplace"
              demoLink="https://nft-marketplace-mkpatidar.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={votingSystem}
              isBlog={false}
              title="Voting dapp"
              description="An e-voting system where the votes data is stored on blockchain hence can not be altered - Build with react.js, web3.js, truffle, solidity and deployed on ethereum testnet."
              ghLink="https://github.com/mayankpatidar275/Voting-dapp"
              demoLink="https://e-voting-system-mkpatidar.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={runnerGame}
              isBlog={false}
              title="Runner game"
              description="Run and jump the obstacles to score high - build with Vanilla Javascript and animations by css"
              ghLink="https://github.com/mayankpatidar275/Game"
              demoLink="https://runner-game-mkpatidar.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keyboardDrum}
              isBlog={false}
              title="Keyboard Drum"
              description="Super cool drum :) Press keys to play drum - build using Vanilla Javascript."
              ghLink="https://github.com/mayankpatidar275/drum_project"
              demoLink="https://keyboard-drum-mkpatidar.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartContracts}
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
