import React from 'react';
import './Meetups.css';

const Meetups = (props) => {
    return (
        <a href={props.link}>
            <div className="meetups-card">
                <h3>{props.title}</h3>
                
                <span><span className="des-sp">Area:</span> {props.area}</span>
            </div>
        </a>
    );
}

export default Meetups;