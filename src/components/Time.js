// import date from "../utils/date.js";
import weekday from "../utils/day";
// import currentYear from "../utils/currentYear";
import aDayBDay from '../utils/aDayBDay';
import { Card, CardBody } from "reactstrap";
import { Col, Row, Container } from "reactstrap";
import '../App.css';

const Time = () => {
  return (
  <Container 
  className="time"
  >
        <Row>
          <Col>
            <span>Today is {weekday}.</span>
          </Col>
          </Row>
          {/* <br></br> */}
          {/* <Col>
            <span className="time">The date is {date}</span>
          </Col> */}
          <Row>
          <Col>
          It's a <span id='aBAB'>{aDayBDay}</span> day.
          </Col>
          </Row>
          {/* <Col>
            <span className="time">The year is {currentYear}</span>
          </Col> */}
  </Container>
  );
};
export default Time;
