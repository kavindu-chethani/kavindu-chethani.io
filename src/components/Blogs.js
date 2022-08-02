import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/b01.png";
import projImg2 from "../assets/img/b02.png";
import projImg3 from "../assets/img/b03.png";
import projImg4 from "../assets/img/b04.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Blogs = () => {

    const blogs = [
     {
        title: "What is Metaverse Technology",
        imgUrl:projImg1,
      },
      {
        title: "API, REST API and RESTful API",
        imgUrl: projImg2,
      },
      {
        title: "NoSQL database",
        imgUrl: projImg3,
      },
      {
        title: "Steps to setup firebase database to your Android project",
        imgUrl: projImg4,
      }
    ];

    return (
        <section className="blogs" id="blogs"> 
        <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({isVisible}) =>
              <div className={isVisible? "animate__animated animate__fadeIn": ""}>
                <h2>Blogs</h2>
                <p>See my blogs on Medium</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          blogs.map((project, index) => {
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
                      <p>See my blogs on Medium</p>
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
      
    </section>
    )
  
}
