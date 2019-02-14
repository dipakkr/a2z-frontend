import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import white from '../../assets/images/logo-white.png'

const Logo = (props) => {

    const final = props.white ? white : logo;

    return (
        <Link to='/' style={{ textDecoration: 'none' }} className="logo-a-tag">
            <img src={final} alt="FrontBench" className="logo" />
        </Link>
    );
}

export default Logo;