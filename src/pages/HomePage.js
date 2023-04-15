import { Col, Row, Container } from "reactstrap";
import EitanInfo from "../features/EitanInfo.js";
import { secondSemesterAccordionData } from "../utils/secondSemesterClasses";
import { firstSemesterAccordionData } from "../utils/firstSemesterClasses";
import Calendar from "../components/Calendar.js";
import Time from "../components/Time";
import AnimatedAccordion from "../features/AnimatedAccordion";
import aDayBDay from "../utils/aDayBDay";
import getCurrentDate from "../utils/getCurrentDate.js";
import { useState } from "react";
import Tabs from "../components/TabComponent/Tabs";

const HomePage = () => {
  const [semester, setSemester] = useState(false)
  return (
    <Container>
      <Row>
        <Row>
          <Col></Col>
        </Row>
        <Col>
          <h2>{aDayBDay && <Time className="d-none d-md-block" />}</h2>
          <EitanInfo
          // id='EitanInfoBox col d-none col-lg-1 d-lg-block d-xxl-block-2'
          />
        </Col>
        <Col className="accordion col-12 col-lg-9 col-xxl-9">
          <Tabs />
          {/* {(secondSemesterAccordionData && firstSemesterAccordionData).map(
            ({ title, content, image, id, current }) => (
              <AnimatedAccordion
                title={title}
                content={content}
                image={image}
                key={id}
                current={current}
              />
            )
          )} */}
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
