import React from 'react';
import './Tags.css';

const Tags = (props) => {

    const stylesClickable = {
        backgroundColor: (props.isClicked) ? 'white' : (props.background || '#262626'),
        color: (props.isClicked) ? 'black' : 'white',
        borderColor: (props.isClicked) ? 'rgba(0, 0, 0, 0.5)' : (props.background || '#262626'),
    }

    const stylesShow = {
        background: props.background || '#262626'
    }

    if(props.clickable) {
        return (
            <button
                className="tag"
                style={stylesClickable}
                onClick={props.clicked}
                data-value={props.text}>
                {props.text + ((props.isClicked) ? ' ❌' : '')}
            </button>
        );
    } else {
        return (
            <span className="tag" style={stylesShow}>
                {props.text}
            </span>
        );
    }
        
}

export default Tags;