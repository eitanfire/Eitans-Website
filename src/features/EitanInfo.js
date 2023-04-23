// import React, { useState } from 'react';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
// import Time from "../components/Time";

// import Modal from '../components/Modal';

const EitanInfo = () => {
    const [toggle, setToggle] = useState(false)
    // const [show, setShow] = useState(false)

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div style={animatedStyle}>
        <Card>
            <CardBody 
             className='d-none d-lg-block'
             >
                <Container 
                // className='border border-1 border-danger d-block' 
                id='EitanInfoBox'
                >
                    <Row className='mx-flex'>
                        {/* <Col>
                        <button onClick={() => setShow(true)}>Show Modal</button>
        <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
          <p>This is modal body</p>
        </Modal>
                        </Col> */}
                        <Col  >
                            <Col
                            // col-none col-md-9 col-xl-7 col-xxl-6'
                            >
                                {/* <img id='eitansProfilePic' className="d-flex
                                 mt-3 responsive" 
                                 src={Eitan} alt='Eitans profile' 
                                 /> */}
                            </Col>
                            <Col className='col-xl-2'>
                            <Button className='EitanInfoButtons border btn-light'>
                                <Link to='/contact'>
                                    <h3 id='rainbowText'>Contact</h3>
                                </Link>
                            </Button>
                            </Col>
                            <Col>
                            <Button id='' className='EitanInfoButtons border btn-light'>
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
        </animated.div>
    );
}

export default EitanInfo;