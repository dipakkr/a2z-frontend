import React from 'react';
import './Meetups.css';

const Meetups = (props) => {
    return (
       
        <div className="meetup-card">
               
                <h2 className="meetup-item-title">{props.title}</h2>
                    {/* <img className="item-share" src={shareButton} alt="share"/> */}
                    {/* <img id="item-star" src={starButton} alt="star"/> */}
               
                <hr/>
                <div className="meetup-item-content">
                    <span id="meetup-item-des"> Area :  </span>
                    <span id="meetup-item-res">{props.area}</span>
                </div>
                <div className="meetup-item-content">
                    <span id="meetup-item-des"> Description :  </span>
                    <span id="meetup-item-res">{props.des}</span>
                </div>
             
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <span className="meetup-des-url"> <a href={props.url}> Visit</a> </span>
                </a>
            
            </div>
    );
}

export default Meetups;