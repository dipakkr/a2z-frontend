import React from 'react';
import './Hamburger.css';
import { Consumer } from '../Context/Context';

const Hamburger = (props) => {
    return (
        <Consumer>
            {({ navHandler }) => (
                <div id="hamburger-menu"
                    onClick={() => navHandler()}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            )}
        </Consumer>
    );
}

export default Hamburger;