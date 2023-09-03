import { Col, Row, Container } from "reactstrap";
import EitanInfo from "../features/EitanInfo.js";
import Calendar from "../components/Calendar.js";
import ShoutOuts from "../components/ShoutOuts.js";
import Time from "../components/Time";
import aDayBDay from "../utils/aDayBDay";
// import Tabs from "../components/TabComponent/Tabs";
import Fall2023ClassesAccordion from "../components/TabComponent/V2/Fall2023ClassesAccordion.js";
import ShoutOutCarousel from "../features/ShoutOutCarousel";

const HomePage = () => {
  return (
    <Container>
      <Row className="accordion">
        <ShoutOutCarousel />
        {/* <ShoutOuts /> */}
        <Col>
          <h2>{aDayBDay && <Time className="d-none d-md-block xxl-2" />}</h2>
          <EitanInfo id="EitanInfoBox" />
        </Col>
        <Col className="accordion col-12 col-lg-9 col-xxl-10">
          {/* <Tabs /> */}
          <Fall2023ClassesAccordion />
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
