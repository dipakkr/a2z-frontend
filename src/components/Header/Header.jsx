import React from 'react';
import './Header.css';
import { Consumer } from '../Context/Context';
import Hamburger from '../Hamburger/Hamburger';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
// import profile from '../../assets/images/man.png';
// import Login from '../../containers/Login/Login';
// import SignUp from '../../containers/SignUp/SignUp';

const Header = (props) => {
    return (
        <Consumer>
            {({ 
                isLanding,
                navLinks,
                toggleModals,
                // loginModal,
                // signupModal,
                // loginHandler,
            }) => {

                const landingStyles = {
                    header: {
                        background: 'transparent'
                    },
                };

                return (
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
                );
            }}
        </Consumer>
    );
}

export default Header;