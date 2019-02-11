import React from 'react';
import './Meetups.css';

const Meetups = (props) => {
    return (
       
        <div className="meetup-card">
               
                <h2 className="item-title">{props.title}</h2>
                    {/* <img className="item-share" src={shareButton} alt="share"/> */}
                    {/* <img id="item-star" src={starButton} alt="star"/> */}
               
                <hr/>
                <div className="item-content">
                    <span id="item-des"> Type :  </span>
                    <span id="item-res">{props.area}</span>
                </div>
             
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <span className="des-url"> <a href={props.url}> Visit</a> </span>
                </a>
            
            </div>
    );
}

export default Meetups;