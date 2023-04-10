// import date from "../utils/date.js";
import weekday from "../utils/day";
import aDayBDay from '../utils/aDayBDay';
import { Col, Row, Container } from "reactstrap";
import { useState, useEffect } from 'react';
import { useSpring, animated, } from 'react-spring';
import '../App.css';
import {getCurrentDate} from "../utils/getCurrentDate";

const Time = () => {
  const [toggle, setToggle] = useState(false)
 
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
    config: { duration: 500 }
});

useEffect(() => {
    setToggle(true);
}, []);

const brightDay = (
  <span id="aBAB">
    {aDayBDay.slice(1)}
  </span>
);

  return (
    <animated.div style={animatedStyle}>
      <Container className="time">
        <Row>
          <Col>
            <span>Today is {weekday}.</span>
          </Col>
        </Row>
        <Row>
          {aDayBDay && (
            <Col>
              It's a{aDayBDay[0]} {brightDay} day.
            </Col>
          )}
        </Row>
      </Container>
    </animated.div>
  );
};
export default Time;
