import React from 'react';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';
import Eitan from '../app/img/Eitans-portfolio-page-picture.png';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody } from 'reactstrap';

const EitanInfo = () => {
    return (
        <Card>
            <CardBody 
            // id='infoCard'
             className='responsive'>
                <Container className='border border-4 border-danger' id='EitanInfoBox'>
                    <Row className='mx-flex'>
                        <Col  >
                            <Col className='col col-lg-9 col-xl-7 col-xxl-6'>
                                <img id='eitansProfilePic' className="d-flex
                                 mt-3 responsive" 
                                 src={Eitan} alt='Eitans profile picture' 
                                 />
                            </Col>
                            <Col className='col-xl-2'>
                            <Button className='btn border border-4 btn-light mb-10 mt-4 btn-link offset-1'>
                                <Link to='/contact'>
                                    <h3 id='rainbowText'>Contact</h3>
                                </Link>
                            </Button>
                            </Col>
                            <Col>
                            <Button id='EitanInfoButtons' className='btn border border-4 mb-4 mt-4 btn-link'>
                                <Link to='/read-more'>
                                <h3 id='rainbowText'>Read about Eitan</h3>
                                    {/* <img className="offset-md-2" src={readMore} alt='Read about Eitan' /> */}
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