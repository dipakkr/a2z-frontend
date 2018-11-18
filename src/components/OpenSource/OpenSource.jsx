import React from 'react';
import './OpenSource.css';

const OpenSource = (props) => {
    return (
        <a href={props.link}>
            <div className="open-source-card">
                <h3>{props.title}</h3>
                <hr />
                <span><span className="des">Organization:</span> {props.org === "NA" ? "--" : props.org}</span>
                <span><span className="des">Stipend:</span> {props.stipend === "NA" ? "--" : props.stipend}</span>
            </div>
        </a>
    );
}

export default OpenSource;