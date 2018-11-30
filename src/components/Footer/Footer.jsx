import React from 'react';
import './Footer.css';
import { Consumer } from '../Context/Context';
import { Link } from 'react-router-dom';
import linkedin from '../../assets/images/linkedin48.png';
import facebook from '../../assets/images/fb.png';
import twitter from '../../assets/images/twiter.png';
import instagram from '../../assets/images/instagram.png';

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
                            <h3>Stay Connected with Us !!</h3>
                                <div id="contact-links">
                                    <a
                                        href="https://www.facebook.com/frontbench.xyz/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <span role="img" aria-label="contact-link">
                                            <img src={facebook} alt="FB" />
                                        </span>
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <span role="img" aria-label="contact-link">
                                            <img src={linkedin} alt="LinkedIn" />
                                        </span>
                                    </a>
                                   
                                    <a
                                        href="https://instagram.com/frontbench.xyz"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <span role="img" aria-label="contact-link">
                                            <img src={instagram} alt="Instagram" />
                                        </span>
                                    </a>
                                    <a
                                        href="https://twitter.com/frontbench"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <span role="img" aria-label="contact-link">
                                            <img src={twitter} alt="Twitter" />
                                        </span>
                                    </a>
                                  
                                </div>
                            </div>
                           
                            <div id="copyright">
                            <hr/>
                                &copy; Copyright 2018 | FrontBench
                            </div>
                        </div>
                    </footer>
                );
            }}
        </Consumer>
    );
}

export default Footer;