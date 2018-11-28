import React from 'react';
import './ConferencesCard.css';

const ConferencesCard = (props) => {
    return (
        <a href={props.link}>
            <div className="conferences-card">
                <div className="conferences-card-cover">
                    <h2>{props.title} <span aria-label="open" role="img" id="reveal"></span></h2>
                </div>
                <p><span>Date:</span> {props.date}</p>
                <p><span>Place:</span> {props.place}</p>
                {/* <p><span>Deadline:</span> {props.deadline}</p> */}
                <p><span>Field:</span> {props.type}</p>
                <p><span>Travel Reimbursement:</span> {props.coverage}</p>
            </div>
        </a>
    );
}

export default ConferencesCard;