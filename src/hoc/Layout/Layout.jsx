import React from 'react';
import './Layout.css';
import LinkButton from '../../components/LinkButton/LinkButton';
import Logo from '../../components/Logo/Logo';
import Hamburger from '../../components/Hamburger/Hamburger';

const Layout = (props) => {
    return (
        <React.Fragment>
            <header>
                <div id="header-container">
                    <div id="header-left">
                        <Logo />
                    </div>
                    <div id="header-right">
                        <nav>
                            <ul>
                                <li><a href="/explorer">Explorer</a></li>
                                <li><a href="/roadmaps">Roadmaps</a></li>
                                <li><a href="/signup">SignUp</a></li>
                                <li><LinkButton href="/login">Login</LinkButton></li>
                            </ul>
                        </nav>
                        <Hamburger />
                    </div>
                </div>
            </header>

            <main>
                {props.children}
            </main>
            
            <footer>
                <div id="footer-container">
                    <div id="claim">
                        <Logo />
                        <small>This project was initiated by Deepak Kumar in 2018</small><br/>
                        <small>Made with <span style={{ color: "red" }}>♥</span> by the Open Source</small>
                    </div>
                    <div id="footer-links-container">
                        <div className="footer-link">
                            <p>Want to Contribute?</p>
                            <LinkButton
                                href="https://github.com/dipakkr/A-to-Z-Resources-for-Students"
                                bgColor="var(--bg-black)"
                                fontSize="12px"
                            >GitHub</LinkButton>
                        </div>
                        <div className="footer-link">
                            <p>Join our Gitter Lobby</p>
                            <LinkButton
                                href="https://gitter.im/a2z-resources"
                                bgColor="var(--red)"
                                fontSize="12px"
                            >Gitter</LinkButton>
                        </div>
                    </div>
                    
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Layout;