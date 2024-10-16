import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body style={{ background: "" }}>
                <div style={{ fontSize: "1.1em", textAlign: "left", marginBottom: "3rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                        <div>
                            <h5 ><a href="https://docs.google.com/document/d/14UAPdOMhaYQoPYvbmsXqfiF_XbRUYK8oPJLTD1LN1Xs/edit?usp=sharing" target="_blank" rel="noreferrer" style={{ color: "white" }}>Software Developer</a></h5>
                            <h6><i > <a href="https://thinkmetal.in" target="_blank" rel="noreferrer" style={{ opacity: "0.7", color: "white", textDecoration: "none" }} >ThinkMetal Private Limited</a></i></h6>
                        </div>
                        <div>
                            <span style={{ opacity: "0.7" }}>Dec 2023 - current</span>
                        </div>
                    </div>
                    <ul style={{ textAlign: "justify" }}>
                        <li className="">
                            Build and contributed to multiple projects using a variety of technologies.
                        </li>
                        <li className="">
                            <span className="purple">Implemented new features</span> such as 3d model rotation and face highlighting on hover. Enhanced and refactored
                            styling. Resolved bugs to ensure a stable, reliable, and repeatable desktop application.
                        </li>
                        <li className="">
                            Built and deployed the <span className="purple">Admin Panel </span>dashboard for ThinkMetal <span className="purple">from scratch </span> to manage 3D printers, users, software,
                            and access controls. Integrated <span className="purple"> OAuth 2.0 </span> for authentication.
                        </li>
                        <li className="">
                            Enhanced the <span><a className="purple" href="https://thinkmetal.in" target="_blank" rel="noreferrer">Website</a></span> by implementing updates based on design team specifications and evolving project needs
                        </li>
                        <li className="">
                            Developed the 3D printer controller screen <span className="purple">Frontend from scratch.</span>
                        </li>
                        <li className="">
                            <span className="purple">System design</span> and development of the <span className="purple">Over-the-air</span>(OTA) update for the 3d printer backend.
                        </li>
                        <li className="">
                            Managed backend development and deployment on Raspberry Pi and AWS. Automated deployment and server setup
                            using scripting, <span className="purple">improving developer experience</span> and operational efficiency.
                        </li>
                        <li className="">
                            <span className="purple">Tools & technologies:</span> React.js, Tauri, Next.js, TypeScript, TanStack Query, React Router, Context API, Module
                            CSS, Shadcn, Tailwind, Socket.IO, Zod, Three.js, Three React Fiber, Express.js, MongoDB, Prisma, PostgreSQL, PM2,
                            SSH, CI/CD, Github Workflows, Linux, Docker, AWS, OAuth 2.0.
                        </li>
                    </ul>
                </div>
                <div style={{ fontSize: "1.1em", textAlign: "left", marginBottom: "3rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                        <div>
                            <h5 ><a href="https://drive.google.com/file/d/1ir-ocTtG2_l3F-CfA85s8mag9V45pl_8/view?usp=sharing" target="_blank" rel="noreferrer" style={{ color: "white" }}>Blockchain Application Developer</a> - 4 months internship</h5>
                            <h6><i style={{ opacity: "0.7" }}>Zenifin technologies Private Limited</i></h6>
                        </div>
                        <div>
                            <span style={{ opacity: "0.7" }}>Feb 2023 - June 2023</span>
                        </div>
                    </div>
                    <ul style={{ textAlign: "justify" }}>
                        <li className="">
                            Developed a Web3 credit system using React.js, Express.js, and SQL.
                        </li>
                        <li className="">
                            Developed smart contracts (Solidity), explored decentralized databases, decentralized identity systems, and more.
                        </li>
                    </ul>
                </div>
            </Card.Body>
        </Card >
    );
}

export default ExperienceCard;
