import React from 'react';
import './Loader.css';

const Loader = (props) => {
    return (
        <div className="loader-container">
            <div className="loader">
                <span className="loader-a">A</span>
                <span className="loader-b">.</span>
                <span className="loader-z">Z</span>
            </div>
        </div>
    );
}

export default Loader;