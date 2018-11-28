import React from 'react';
import './Footer.css';
import { Consumer } from '../Context/Context';
import { Link } from 'react-router-dom';
import github from '../../assets/images/github.png';
import gitter from '../../assets/images/gitter.png';

const Footer = (props) => {

    return (
        <Consumer>
            {({
                pages,
                isLanding,
            }) => {
                
                const extraStyles = {
                    display: isLanding ? 'none' : 'block',
                    bottom: 0
                }

                return (
                    <footer style={extraStyles}>
                        <div id="footer-container">
                            <div id="left-footer">
                                <h3>GoTo</h3>
                                {pages.map((page, i) => (
                                   <Link key={i} to={page[1]}>{page[0]}</Link>
                                ))}
                            </div>
                            <div id="right-footer">
                                <h3>Contact/Contribute</h3>
                                <div id="contact-links">
                                    <a
                                        href="https://github.com/dipakkr/A-to-Z-Resources-for-Students"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <span role="img" aria-label="contact-link">
                                            <img src={github} alt="Git" />
                                        </span>
                                    </a>
                                    <a
                                        href="https://gitter.im/a2z-resources"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <span role="img" aria-label="contact-link">
                                            <img src={gitter} alt="Git" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div id="copyright">
                                &copy; Copyright 2018 | FrontBench <del>A2Z</del>
                            </div>
                        </div>
                    </footer>
                );
            }}
        </Consumer>
    );
}

export default Footer;