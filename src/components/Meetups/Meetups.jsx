import React from 'react';
import './Meetups.css';

const Meetups = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className="meetups-card">
                <h3>{props.title}</h3>
                <hr />
                <span><span className="des-sp">Area:</span> {props.area}</span>
            </div>
        </a>
    );
}

export default Meetups;