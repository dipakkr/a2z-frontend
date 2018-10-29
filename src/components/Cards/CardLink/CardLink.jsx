import React from 'react';
import './CardLink.css';
import { Link } from 'react-router-dom';

const CardLink = (props) => {
    const variableStyles = {
        backgroundColor: props.color || 'var(--light-green)'
    }

    return (
        <div className="card-link">
            <Link
                to={props.href}
                style={variableStyles}
                className="card-link-button">
                <img src={props.png} alt=""/>
                <p>{props.title}</p>
            </Link>
        </div>

    );
}

export default CardLink;