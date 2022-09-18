import React from 'react';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';
import  Banner from '../app/img/class-website-banner.png';
import Logo from '../app/img/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
    <div className='App' id ='Header'>
            <Link to='/'>
            <Container>
                <Row id= 'banner'>
                <Col className="col-7 col-md-4 float-start">
                    <img id='classWithEitan' src={Banner} alt='Banner' />            
                </Col>
                <Col className="col-6 col-md-8 d-none d-lg-block">
                <img id="logo" src={Logo} alt='September School logo'/>
                </Col>
        
                </Row>
            </Container>
            </Link>
    </div>
    );
}

export default Header;