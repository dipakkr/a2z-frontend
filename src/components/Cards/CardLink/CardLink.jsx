import React from 'react';
import './CardLink.css';
import { Link } from 'react-router-dom';

const CardLink = (props) => {
    const variableStyles = {
        backgroundColor: props.color || 'var(--light-green)'
    }

    return (
        <div className="card-link" style={variableStyles}>
            <Link
                to={props.href}
                className="card-link-button">
                <span><img src={props.png} alt=""/></span>
                {props.title}
                {/* <span className="card-tag"><p>{props.tag}</p> </span> */}
                
            </Link>
        </div>
    );
}

export default CardLink;