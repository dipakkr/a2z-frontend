import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = (props) => {
    return (
        <Link to='/' style={{ textDecoration: 'none' }}>
            <h2 style={{ color: props.color || 'var(--black)' }} className="logo">A<span style={{ color: 'var(--theme)' }}><sub>2</sub></span>Z</h2>
        </Link>
    );
}

export default Logo;