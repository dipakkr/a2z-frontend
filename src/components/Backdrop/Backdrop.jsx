import React from 'react';
import './Backdrop.css';
import { Consumer } from '../Context/Context';

const Backdrop = () => {
    return (
        <Consumer>
            {({ navHandler }) => (
                <div className="backdrop-container" onClick={navHandler}></div>
            )}
        </Consumer>
    );
}

export default Backdrop;