import React from 'react';
import './SlidingNavLinks.css';
import { Link } from 'react-router-dom';
import { Consumer } from '../../Context/Context';

const SlidingNavLinks = (props) => {
    return (
        <Consumer>
            {({ navHandler, toggleModals }) => {
                if (props.title === "Login") {
                    return (
                        <Link to={props.link} style={{ textDecoration: 'none' }}>
                            <div className="sliding-nav-link-container" onClick={(e) => { navHandler(); toggleModals(e, "Login"); }}>
                                <p>{props.title}</p>
                            </div>
                        </Link>
                    );
                }
                if (props.title === "SignUp") {
                    return (
                        <Link to={props.link} style={{ textDecoration: 'none' }}>
                            <div className="sliding-nav-link-container" onClick={(e) => { navHandler(); toggleModals(e, "SignUp"); }}>
                                <p>{props.title}</p>
                            </div>
                        </Link>
                    );
                }
                return (
                    <Link to={props.link} style={{ textDecoration: 'none' }}>
                        <div className="sliding-nav-link-container" onClick={navHandler}>
                            <p>{props.title}</p>
                        </div>
                    </Link>
                );
            }}
        </Consumer>
    );
}

export default SlidingNavLinks;