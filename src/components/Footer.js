import React from 'react';
import '../App.css';
import currentYear from '../utils/currentYear.js';

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <p className='footer'>
            <span id='nameAndYear'>
                
                ©{year}&nbsp;Eitan Fire</span>
            <span style={{ color: '#00008B' }}> ⎸</span>
            <span id='shine'>&nbsp;A 🌍 Class Experience!
            </span>
        </p>
    );
}

export default Footer;