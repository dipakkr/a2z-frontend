import React from 'react';
import './Loader.css';
import loader from '../../assets/images/loader.png'

const Loader = (props) => {
    return (
        <div className="loader-container">
            <div className="loader">
                <img src={loader} alt="Loading..." />
                <p>Fetching content..</p>
            </div>
        </div>
    );
}

export default Loader;