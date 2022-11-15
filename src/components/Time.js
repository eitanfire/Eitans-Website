// import date from "../utils/date.js";
import weekday from "../utils/day";
// import currentYear from "../utils/currentYear";
import aDayBDay from '../utils/aDayBDay';
import { Card, CardBody } from "reactstrap";
import { Col, Row, Container } from "reactstrap";
import '../App.css';

const Time = () => {
  return (
  <Container className="time col col-lg-9 col-xl-7 col-xxl-2">
    <Card >
      <CardBody>
        {/* <Row>
          <Col> */}
            <span>Today is {weekday}</span>
          {/* </Col>
          </Row> */}
          <br></br>
          {/* <Col>
            <span className="time">The date is {date}</span>
          </Col> */}
          {/* <Row>
          <Col> */}
          <span>It's a{aDayBDay} day</span>
          {/* </Col>
          </Row> */}
          {/* <Col>
            <span className="time">The year is {currentYear}</span>
          </Col> */}
      </CardBody>
    </Card>
  </Container>
  );
};

export default Time;
