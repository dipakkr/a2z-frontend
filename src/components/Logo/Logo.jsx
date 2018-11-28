import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Logo = (props) => {
    return (
        <Link to='/home' style={{ textDecoration: 'none' }}>
            <img src={logo} alt="Front Bench" className="logo" />
        </Link>
    );
}

export default Logo;