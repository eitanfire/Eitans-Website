import { Col, Row, Container } from "reactstrap";
import EitanInfo from "../features/EitanInfo.js";
import { accordionData } from "../utils/content";
import Calendar from "../components/Calendar.js";
import Accordion from "../Accordion";
import Time from "../components/Time";

const HomePage = () => {
  return (
    <Container>
          <Row>
        <Row>
        <Col>
            </Col>
        </Row>
        {/* <Col Col className="col-6 d-none col-lg-3 d-lg-block d-xxl-block-2">
        <Time />
        </Col> */}
        <Col>
        <Time className='d-none d-md-block'
        // className='time d-sm-block col-lg-3 d-lg-block d-xxl-block'
        />
        <EitanInfo 
        // id='EitanInfoBox col d-none col-lg-1 d-lg-block d-xxl-block-2'
        />
        </Col>
        <Col className="accordion col-12 col-lg-9 col-xxl-9">
          {accordionData.map(
            ({ title, content, image, id, current }) =>
              current && (
                <Accordion
                  title={title}
                  content={content}
                  image={image}
                  key={id}
                  current={current}
                />
              )
          )}
        </Col>
        <Row>
        <Col>

        </Col>
          <Col className="col-12 mt-4">
            <Calendar />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default HomePage;
