import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img11.png";
import projImg2 from "../assets/img/img2.png";
import projImg3 from "../assets/img/img3.png";
import projImg4 from "../assets/img/img4.png";
import projImg5 from "../assets/img/img5.png";
import projImg6 from "../assets/img/img6.png";
import projImg7 from "../assets/img/img7.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Courier Service System (Store Managment)",
      description: "Design & Development using MERN stack",
      
      imgUrl:projImg1,
    },
    {
      title: "Dinning Grades Mobile Application",
      description: "Design & Development using JAVA, firebase",
      imgUrl: projImg2,
    },
    {
      title: "Colombo Pizza",
      description: "Design & Development the frontend",
      imgUrl: projImg3,
    },
    {
      title: "Bus Ticket Reservation System",
      description: "Design & Development using JAVA",
      imgUrl: projImg4,
    },
    {
      title: "Pet Adoption site",
      description: "Design & Development using HTML5, Bootstrap, PHP ",
      imgUrl: projImg5,
    },
    {
      title: "Master Food",
      description: "Design & Development using PHP , SQL ",
      imgUrl: projImg6,
    },
    {
      title: "Labor Health Predection Analysis",
      description: "Design & Development using JAVA, firebase",
      imgUrl: projImg7,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>See my projects on github </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                          
                        }
                   
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>See my projects on github </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
