import React from 'react';
import './SlidingNav.css';
import { Consumer } from '../Context/Context';

const SlidingNav = (props) => {
    return (
        <Consumer>
            {({ navIsOpen, navHandler }) => {
                
                const slideNav = {
                    transform: (navIsOpen) ? 'translateX(0)' : 'translateX(-110%)'
                }

                return (
                    <div className="sliding-nav-container" style={slideNav}>
                    
                    </div>
                );
            }}
        </Consumer>
    );
}

export default SlidingNav;