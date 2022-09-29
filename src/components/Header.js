import React from 'react';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';
import Banner from '../app/img/class-website-banner.png';
import Logo from '../app/img/logo.jpg';

const Header = () => {
    return (
        <div className='App' id='Header'>
            <Container>
                <Row id='banner'>
                    <Col className="col col-md-4 float-start">
                        <img id='classWithEitan' src={Banner} alt='Banner' />
                    </Col>
                    <Col className="d-none d-lg-block">
                        <img id="logo" src={Logo} alt='September School logo' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;