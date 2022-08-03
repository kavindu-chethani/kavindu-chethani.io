import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/img/me.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "| Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Kavindu Chethani`} <span className="txt-rotate" dataPeriod="1000" 
                data-rotate='[ "Developer", "Under graduate"]'>
                  <span className="wrap">{text}
                  </span>
                  </span>
                  </h1>
                  <p>I'm a Third-year undergraduate student from University of SLIIT,
                     Faculty of Computing. I’m reading for BSc.(Hons) in Information Technology(special).</p>
                  <p>I'm Intresting in Web Development, Mobile Development and front-end Development</p>
                  <p></p>
                  <p></p>
                  <span className="wrap">
                  </span>
                  <span className="wrap">
                  </span>
                  <span className="wrap">
                  </span>
                 
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div>
                  <img src={me} />
                </div>
           
          </Col> 
        </Row>
      </Container>
    </section>
  )
}
