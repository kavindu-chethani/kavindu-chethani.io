import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import TrackVisibility from 'react-on-screen';

export const AboutMe = () => {

    const aboutme=[

    ]


return (
    <section className="aboutme" id="aboutme">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div >
                <h2>About Me</h2>
                <p>Hi there, I'm Kavindu Chethani </p>
                <p>Bcs(Hons)Information Technology (special)-SLIIT graduated</p>
                <p>Graduate Diploma in Software Engineering-IJSE</p>
                
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
     
    </section>
  )
}
