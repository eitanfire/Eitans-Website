// import React, { useState } from 'react';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';
import Eitan from '../app/img/Eitans-portfolio-page-picture.png';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody } from 'reactstrap';
import Time from "../components/Time";

// import Modal from '../components/Modal';

const EitanInfo = () => {
    // const [show, setShow] = useState(false)
    return (
        <Card>
            <CardBody 
             className='responsive'>
                <Container className='border border-4 border-danger' id='EitanInfoBox'>
                    <Row className='mx-flex'>
                        {/* <Col>
                        <button onClick={() => setShow(true)}>Show Modal</button>
        <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
          <p>This is modal body</p>
        </Modal>
                        </Col> */}
                        <Col  >
                            <Col className='col col-lg-9 col-xl-7 col-xxl-6'>
                                <img id='eitansProfilePic' className="d-flex
                                 mt-3 responsive" 
                                 src={Eitan} alt='Eitans profile' 
                                 />
                            </Col>
                            <Col className='col-xl-2'>
                            <Button className='EitanInfoButtons border btn-light'>
                                <Link to='/contact'>
                                    <h3 id='rainbowText'>Contact</h3>
                                </Link>
                            </Button>
                            </Col>
                            <Col>
                            <Button id='' className='EitanInfoButtons btn border btn-light border-4 mb-4 mt-4 btn-link'>
                                <Link to='/read-more'>
                                <h3 id='rainbowText'>Read about Eitan</h3>
                                </Link>
                            </Button>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </CardBody>
        </Card>
    );
}

export default EitanInfo;