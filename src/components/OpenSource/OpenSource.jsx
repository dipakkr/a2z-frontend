import React from 'react';
import './OpenSource.css';

const OpenSource = (props) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
            <div className="open-source-card">
            <div className="upper">
                    <h3>{props.title}</h3>
            </div>
                <div className="container">
                    <span><span className="des">Incentives:</span> {props.stipend === "NA" ? "--" : props.stipend}</span>
                </div>     
            </div>
        </a>
    );
}

export default OpenSource;