import React from 'react';
import './ConferencesCard.css';

const ConferencesCard = (props) => {
    return (
        <a href={props.link}>
            <div className="conferences-card">
                <div className="conferences-card-cover">
                    <h2>{props.title} <span aria-label="open" role="img" id="reveal"></span></h2>
                </div>
                <p><span>Place:</span> {props.place}</p>
                <p><span>Date:</span> {props.date}</p>
                {/* <p><span>Deadline:</span> {props.deadline}</p> */}
                <p><span>Travel Reimbruisemnt:</span> {props.coverage}</p>
                <p><span>Type:</span> {props.type}</p>
            </div>
        </a>
    );
}

export default ConferencesCard;