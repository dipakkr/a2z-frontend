import React from 'react';
import './SlidingNav.css';
import { Consumer } from '../Context/Context';
import Logo from '../Logo/Logo';
import SlidingNavLinks from './SlidingNavLinks/SlidingNavLinks';

const SlidingNav = () => {
    return (
        <Consumer>
            {({ navIsOpen, navLinks, navHandler }) => {

                const slideNav = {
                    transform: (navIsOpen) ? 'translateX(0)' : 'translateX(-110%)'
                }

                return (
                    <div className="sliding-nav-container" style={slideNav}>
                        <div id="sliding-nav-header">
                            <Logo color="#fff" />
                            <div onClick={navHandler} id="back-button"></div>
                        </div>
                        <div id="sliding-nav-main">
                            {navLinks.map((link) => <SlidingNavLinks key={link[0]} title={link[0]} link={link[1]} />)}
                        </div>
                    </div>
                );
            }}
        </Consumer>
    );
}

export default SlidingNav;