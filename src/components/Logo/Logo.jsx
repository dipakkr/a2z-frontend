import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = (props) => {
    return (
        <Link to='/home' style={{ textDecoration: 'none' }}>
            <h2 style={{ color: props.color || 'var(--black)' }} className="logo">A<span style={{ color: '#678' }}>2</span>z</h2>
        </Link>
    );
}

export default Logo;