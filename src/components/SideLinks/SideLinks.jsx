import React from 'react';
import './SideLinks.css';
import github from '../../assets/images/github.png';
import gitter from '../../assets/images/gitter.png';

const SideLinks = (props) => {
    return (
        <div className="side-links-container">
            <div className="side-link">
                <a
                    href="https://github.com/dipakkr/A-to-Z-Resources-for-Students"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={github} alt="" />
                </a>
            </div>
            <div className="side-link">
                <a
                    href="https://gitter.im/a2z-resources"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={gitter} alt="" />
                </a>
            </div>
        </div>
    );
}

export default SideLinks;