import { Col, Row, Container } from "reactstrap";
import EitanInfo from "../features/EitanInfo.js";
import Calendar from "../components/Calendar.js";
import Time from "../components/Time";
import aDayBDay from "../utils/aDayBDay";
import Tabs from "../components/TabComponent/Tabs";

const HomePage = () => {
  return (
    <Container>
      <Row className="accordion">
        <Col>
          <h2>{aDayBDay && <Time className="d-none d-md-block" />}</h2>
          <EitanInfo id="EitanInfoBox" />
        </Col>
        <Col className="accordion col-12 col-lg-9 col-xxl-">
          <Tabs />
        </Col>
        <Row>
          <Col className="col-12 mt-4">
            <Calendar />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default HomePage;
