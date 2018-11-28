import React from 'react';
import './Layout.css';
import Logo from '../../components/Logo/Logo';
import Hamburger from '../../components/Hamburger/Hamburger';
import Backdrop from '../../components/Backdrop/Backdrop';
import SlidingNav from '../../components/SlidingNav/SlidingNav';
import { Consumer } from '../../components/Context/Context';
import { Link } from 'react-router-dom';
// import profile from '../../assets/images/man.png';
// import Login from '../../containers/Login/Login';
// import SignUp from '../../containers/SignUp/SignUp';

const Layout = (props) => {
    return (
        <Consumer>
            {({
                navIsOpen,
                navLinks,
                navHandler,
                isLanding,
                toggleModals,
                // loginModal,
                // signupModal,
                // loginHandler,
            }) => {

                const landingStyles = {
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

                return <>
                    {/* {(loginModal) ? <Login ok={loginHandler} close={toggleModals} /> : null}
                    {(signupModal) ? <SignUp ok={loginHandler} close={toggleModals} /> : null} */}
                    {(navIsOpen) ? <Backdrop clicked={navHandler} /> : null}
                    <SlidingNav />
                    <header style={isLanding ? landingStyles.header : null}>
                        <div id="header-container">
                            <div id="header-left">
                                <Logo />
                            </div>
                            <div id="header-right">
                                <nav>
                                    <ul>
                                        {navLinks.map((link, i) => {
                                            // if (link[0] === "Login") {
                                            //     return (
                                            //         <li key={i} className="login" style={{ color: "white" }}>
                                            //             <Link onClick={(e) => toggleModals(e, "Login")} to={link[1]}>{link[0]}</Link>
                                            //         </li>
                                            //     )
                                            // }
                                            // if (link[0] === "SignUp") {
                                            //     return (
                                            //         <li key={i}>
                                            //             <Link onClick={(e) => toggleModals(e, "SignUp")} to={link[1]}>{link[0]}</Link>
                                            //         </li>
                                            //     )
                                            // }
                                            // if (link[0] === "Dashboard") {
                                            //     return (
                                            //         <li key={i}>
                                            //             <Link to={link[1]}>
                                            //                 <img className="profile" src={profile} alt="Profile" />
                                            //             </Link>
                                            //         </li>
                                            //     )
                                            // }
                                            return (
                                                <li key={i}>
                                                    <Link to={link[1]}>{link[0]}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </nav>
                                <Hamburger />
                            </div>
                        </div>
                    </header>

                    {props.children}


                    <footer style={isLanding ? landingStyles.footer : null}>
                        <div id="footer-container">
                            <div id="claim">
                                {/* <p>Made with <span style={{ color: "red" }}>♥</span></p> */}
                                <p> © Copyright OneFraction 2018. </p>
                            </div>
                           
                        </div>
                    </footer>
                </>
            }}
        </Consumer>
    )
}

export default Layout;