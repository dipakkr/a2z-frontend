import React from 'react';
import './ComingSoon.css';

const ComingSoon = (props) => {
    return (
        <div className="coming-soon">
            {props.message}
        </div>
    );
}

export default ComingSoon;