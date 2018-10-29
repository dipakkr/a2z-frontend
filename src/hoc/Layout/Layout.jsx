import React from 'react';
import './Layout.css';
import Logo from '../../components/Logo/Logo';
import Hamburger from '../../components/Hamburger/Hamburger';
import Backdrop from '../../components/Backdrop/Backdrop';
import SlidingNav from '../../components/SlidingNav/SlidingNav';
import { Consumer } from '../../components/Context/Context';
import { Link } from 'react-router-dom';
import ellipse from '../../assets/images/ellipse.svg';
import footer from '../../assets/images/footer.svg';

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
                    <img src={ellipse} alt="" className="ellipse" />
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
                    
                    <footer  style={isLanding ? landingStyles.footer : null}>
                        <div id="footer-container">
                            <Logo />
                            <div id="claim">
                                <p>This project was initiated by Deepak Kumar in 2018</p>
                                <p>Made with <span style={{ color: "red" }}>♥</span> by the Open Source</p>
                            </div>
                            <div id="footer-links-container">

                            </div>
                            
                        </div>
                    </footer>
                </React.Fragment>
            }}
        </Consumer>
    )
}

export default Layout;