import React from 'react';
import './OpenSource.css';

const OpenSource = (props) => {

    const dynamicStyles = {
        backgroundImage: 'url(' + props.bgImg + ')'
    }

    return (
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
            <div className="open-source-card">
                <div className="upper" style={dynamicStyles}>
                    <div className="overlay">
                        <h3>{props.title}</h3>
                    </div>
                </div>
                <div className="container">
                    <span><span className="des">Incentives:</span> {props.stipend === "NA" ? "--" : props.stipend}</span>
                </div>     
            </div>
        </a>
    );
}

export default OpenSource;