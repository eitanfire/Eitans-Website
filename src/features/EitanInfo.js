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
          <Container id="EitanInfoBox">
            <Row className="mx-flex">
              <Col>
                <Col
                //    className='col-none col-md-9 col-xl-7 col-xxl-6'
                ></Col>
                <Col className="col-xl-2">
                  <Button className="EitanInfoButtons border btn-light">
                    <Link to="/contact">
                      <h3 id="rainbowText">Contact</h3>
                    </Link>
                  </Button>
                </Col>
                <Col>
                  <Button id="" className="EitanInfoButtons border btn-light">
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
