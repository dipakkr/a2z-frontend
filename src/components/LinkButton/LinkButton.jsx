import React from 'react';
import './LinkButton.css';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {

    const variableStyles = props.styles;

    return (
        <Link to={props.href} style={variableStyles} className="link-button">{props.children}</Link>
    );
}

export default LinkButton;
