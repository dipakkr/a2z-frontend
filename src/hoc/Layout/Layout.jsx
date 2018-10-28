import React from 'react';
import './Layout.css';
import LinkButton from '../../components/LinkButton/LinkButton';
import Logo from '../../components/Logo/Logo';
import Hamburger from '../../components/Hamburger/Hamburger';
import Backdrop from '../../components/Backdrop/Backdrop';
import SlidingNav from '../../components/SlidingNav/SlidingNav';
import { Consumer } from '../../components/Context/Context';
import { Link } from 'react-router-dom';

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
                                            <LinkButton
                                                href="/login"
                                                styles={{ background: "linear-gradient(#8eb7f5,#40e1dc)", color: 'white' }}>Login</LinkButton>
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
                    
                    <footer  style={isLanding ? landingStyles.footer : null}>
                        <div id="footer-container">
                            <div id="claim">
                                <Logo />
                                <small>This project was initiated by Deepak Kumar in 2018</small><br/>
                                <small>Made with <span style={{ color: "red" }}>♥</span> by the Open Source</small>
                            </div>
                            <div id="footer-links-container">
                                <div className="footer-link">
                                    <LinkButton
                                        href="https://github.com/dipakkr/A-to-Z-Resources-for-Students"
                                        styles={{ background: "var(--black)" }}
                                    >GitHub</LinkButton>
                                </div>
                                <div className="footer-link">
                                    <LinkButton
                                        href="https://gitter.im/a2z-resources"
                                        styles={{ background: "var(--red)" }}
                                    >Gitter</LinkButton>
                                </div>
                            </div>
                            
                        </div>
                    </footer>
                </React.Fragment>
            }}
        </Consumer>
    )
}

export default Layout;