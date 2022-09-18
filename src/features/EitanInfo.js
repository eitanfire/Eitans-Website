import React from 'react';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';
import Eitan from '../app/img/Eitans-portfolio-page-picture.png';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody } from 'reactstrap';

const EitanInfo = () => {
    return (
        <Card>
            <CardBody>
                <Container className="border border-4 border-danger">
                    <Row >
                        <Col id='EitanInfoBox' className='col col-12 col-xxl-3'>
                            <Col className='col col-12 col-lg-3'>
                                <img className="card-img-left mt-4" src={Eitan} alt='Eitans profile picture' />
                            </Col>
                            <Button className='btn border border-4 btn-light mb-10 mt-4 btn-link offset-1'>
                                <Link to='/contact'>
                                    <h3 id='rainbowText'>Contact</h3>
                                </Link>
                            </Button>
                            <Button id='EitanInfoButtons' className='btn  border border-4 mb-4 mt-4 btn-light btn-link'>
                                <Link to='/read-more'>
                                <h3 id='rainbowText'>Read about Eitan</h3>
                                    {/* <img className="offset-md-2" src={readMore} alt='Read about Eitan' /> */}
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </CardBody>
        </Card>
    );
}

export default EitanInfo;