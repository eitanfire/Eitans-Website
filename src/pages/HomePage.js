import { Col, Row, Container } from 'reactstrap';
import EitanInfo from '../features/EitanInfo.js';
import { accordionData } from '../utils/content';
import Calendar from '../components/Calendar.js';
import Accordion from '../Accordion';

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col className="col-6 d-none col-lg-3 d-lg-block d-xxl-block-2">
                    <EitanInfo />
                </Col>
                <Col className="accordion col-12 col-lg-9 ">
                    {accordionData.map(({ title, content, image }) => (
                        <Accordion title={title} content={content} image={image} />
                    ))}
                </Col>
                <Row >
                    <Col className='col col-md-12 col-lg-11 col-xl-11 mt-4 '>
                        <Calendar />
                    </Col>
                </Row>
                <Col>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;