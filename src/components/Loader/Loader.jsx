import React from 'react';
import './Loader.css';
import loader from '../../assets/images/loader.png'

const Loader = (props) => {
    return (
        <div className="loader-container">
            <div className="loader">
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
            </div>
        </div>
    );
}

export default Loader;