import React from 'react';
import './Message.css';
import { Link } from 'react-router-dom';

const Message = () => {
    return (
        <div className="message">
            <div className="message-content">
                <h2>Hey !! You are lost.</h2>
                <p>Find your way <Link to="/home">home</Link></p>
            </div>
        </div>
    );
}

export default Message;