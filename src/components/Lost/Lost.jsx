import React from 'react';
import './Lost.css';
import { Link } from 'react-router-dom';

const Lost = () => {
    return (
        <div className="lost">
            <div className="lost-message">
                <img width="200" height="200" src="https://media.giphy.com/media/pHZC0WfAKmV0Ta8emo/giphy.gif" alt="lost"/>
                <h2>Hey !! You are lost.</h2>
                <p>Find your way <Link to="/home">home</Link></p>
            </div>
        </div>
    );
}

export default Lost;