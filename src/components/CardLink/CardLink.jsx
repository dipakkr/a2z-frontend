import React from 'react';
import './CardLink.css';

const CardLink = (props) => {
    const variableStyles = {
        color: props.color || 'white',
        backgroundColor: props.bgColor || 'var(--light-green)'
    }

    return (
        <div className="card-link">
            <a href={props.href} style={variableStyles} className="card-link-button">{props.children}</a>
        </div>

    );
}

export default CardLink;