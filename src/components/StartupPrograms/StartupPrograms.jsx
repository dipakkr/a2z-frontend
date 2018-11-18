import React from 'react';
import './StartupPrograms.css';

const StartupPrograms = (props) => {
    return (
        <a href={props.link}>
            <div className="startup-programs-card">
                <h3>{props.title}</h3>
                <hr />
                <span><span className="des-sp">Organization:</span> {props.org === "NA" ? "--" : props.org}</span>
            </div>
        </a>
    );
}

export default StartupPrograms;