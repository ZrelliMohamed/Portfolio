import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/266665.png";
import chatify from "../../Assets/Projects/50906.jpg";
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
              title="Bus Tracker"
              description="A web application that provides solutions for users to determine
              what bus to take and when, along with approximate arrival times"
              ghLink="https://github.com/ZrelliMohamed/SOLO-PROJECT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="E-Education"
              description="Platform for education purpose that teacher publish courses
              and student can apply to it."
              ghLink="https://github.com/ZrelliMohamed/Green_Field_Project"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sportify"
              description="An e-commerce fitness app that facilitates communication
              between coaches and users and ensures the best programs and
              products"
              ghLink="https://github.com/ZrelliMohamed/Sportify"            
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
