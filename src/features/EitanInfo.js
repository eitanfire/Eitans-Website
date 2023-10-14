import "../App.css";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Button, Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const EitanInfo = () => {
  const [toggle, setToggle] = useState(false);

  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1,1)" : "scale(1,0)",
    config: { duration: 500 },
  });

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <animated.div style={animatedStyle}>
      <Card>
        <CardBody className="d-none d-lg-block">
          <Container className="eitan-info-box">
            <Row>
              <Col>
                <Col className="col">
                  <Button className="EitanInfoButtons border-dark rounded-pill btn-info btn-block">
                    <Link to="/shout-out">
                      <h3 id="rainbowText">Shout Out</h3>
                    </Link>
                  </Button>
                </Col>
                <Col className="col">
                  <Button className="EitanInfoButtons border border-dark rounded-pill btn-info btn-block">
                    <Link to="/contact">
                      <h3 id="rainbowText">Contact</h3>
                    </Link>
                  </Button>
                </Col>
                <Col>
                  <Button className="EitanInfoButtons border border-dark rounded-pill btn-info btn-block">
                    <Link to="/read-more">
                      <h3 id="rainbowText">Read about Eitan</h3>
                    </Link>
                  </Button>
                </Col>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </animated.div>
  );
};

export default EitanInfo;
