import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
    return (
        <div className="backdrop-container" onClick={props.clicked}></div>
    );
}

export default Backdrop;