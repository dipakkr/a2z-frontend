import React from 'react';
import './Layout.css';
import Logo from '../../components/Logo/Logo';
import Hamburger from '../../components/Hamburger/Hamburger';
import Backdrop from '../../components/Backdrop/Backdrop';
import SlidingNav from '../../components/SlidingNav/SlidingNav';
import { Consumer } from '../../components/Context/Context';
import { Link } from 'react-router-dom';
import github from '../../assets/images/github.png';
import gitter from '../../assets/images/gitter.png';


const Layout = (props) => {
    return (
        <Consumer>
            {({ navIsOpen, isLanding }) => {

                const landingStyles ={
                    header: {
                        background: 'transparent'
                    },
                    footer: {
                        display: 'none'
                    },
                    extra: {
                        display: 'none'
                    }
                };

                return <React.Fragment>
                    {(navIsOpen) ? <Backdrop /> : null}
                    <SlidingNav />
                    <header style={isLanding ? landingStyles.header : null}>
                        <div id="header-container">
                            <div id="header-left">
                                <Logo />
                            </div>
                            <div id="header-right">
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to="/explorer">Explorer</Link>
                                        </li>
                                        <li>
                                            <Link to="/roadmaps">Roadmaps</Link>
                                        </li>
                                        <li>
                                            <Link to="/signup">SignUp</Link>
                                        </li>
                                        <li>
                                            <Link to="/login">Login</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <Hamburger />
                            </div>
                        </div>
                    </header>

                    <main style={isLanding ? landingStyles.main : null}>
                        {props.children}
                    </main>
                    
                    <footer style={isLanding ? landingStyles.footer : null}>
                        <div id="footer-container">
                            <Logo />
                            <div id="claim">
                                <p>This project was initiated by Deepak Kumar in 2018</p>
                                <p>Made with <span style={{ color: "red" }}>♥</span> by the Open Source</p>
                            </div>
                            <div id="footer-links-container">
                                    <a
                                        href="https://github.com/dipakkr/A-to-Z-Resources-for-Students"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-link">
                                        <span><img src={github} alt=""/></span>Github
                                    </a>
                                    <a
                                        href="https://gitter.im/a2z-resources"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-link">
                                        <span><img src={gitter} alt=""/></span>Gitter
                                    </a>
                            </div>
                            
                        </div>
                    </footer>
                    <div className="side-links-container" style={isLanding ? landingStyles.extra : null}>
                        <div className="side-link">
                            <a
                                href="https://github.com/dipakkr/A-to-Z-Resources-for-Students"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={github} alt=""/>
                            </a>
                        </div>
                        <div className="side-link">
                            <a
                                href="https://gitter.im/a2z-resources"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={gitter} alt=""/>
                            </a>
                        </div>
                    </div>
                </React.Fragment>
            }}
        </Consumer>
    )
}

export default Layout;