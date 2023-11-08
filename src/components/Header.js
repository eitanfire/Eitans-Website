import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { Col, Row, Container } from "reactstrap";
import Banner from "../app/img/class-website-banner.png";
import Logo from "../app/img/logo.jpg";
import { Link } from "react-router-dom";
import { useSpring, animated, easings } from "react-spring";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const animatedStyle = useSpring({
    // mass: 5,
    // tension: 50,
    // friction: 25,
    // clamp: true,
    opacity: toggle ? 1 : 0,
    // transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
    config: {
      duration: 500,
      // easing: easings.easeInOutElastic
    },
    marginLeft: toggle ? 0 : -500,
    // marginRight: toggle ? 0 : -500
  });

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <animated.div style={animatedStyle}>
      <div className="App" id="Header">
        <Link to="/">
          <Container>
            <Row id="banner">
              <Col className="d-none d-sm-none d-md-inline-block">
                <img id="class-with-eitan-lg" src={Banner} alt="Banner" />
              </Col>
              <Col className="d-xs-inline-block d-md-none">
                <img id="class-with-eitan-sm" src={Banner} alt="Banner" />
              </Col>
              <Col className="d-none d-lg-block">
                <img id="logo" src={Logo} alt="September School logo" />
              </Col>
            </Row>
          </Container>
        </Link>
      </div>
    </animated.div>
  );
};

export default Header;
