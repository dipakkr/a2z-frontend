import React from 'react';
import './ConferencesCard.css';

const ConferencesCard = (props) => {
    return (       
        <div className="conference-card">
               
                <h2 className="conference-item-title">{props.title}</h2>
                    {/* <img className="item-share" src={shareButton} alt="share"/> */}
                    {/* <img id="item-star" src={starButton} alt="star"/> */}
               
                <hr/>
                <div className="conference-item-content">
                    <span id="conference-item-des"> Date :  </span>
                    <span id="conference-item-res">{props.date}</span>
                </div>
                <div className="conference-item-content">
                    <span id="conference-item-des"> Place :   </span>
                    <span id="conference-item-res">{props.place}</span>
                </div>
                <div className="conference-item-content">
                    <span id="conference-item-des"> Type :  </span>
                    <span id="conference-item-res">{props.type}</span>
                </div>
                <div className="conference-item-content">
                    <span id="conference-item-des"> Scholarship :  </span>
                    <span id="conference-item-res">{props.coverage}</span>
                </div>

                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <span className="conference-des-url"> <a href={props.url}> Visit</a> </span>
                </a>
            
            </div>
    );
}
export default ConferencesCard;