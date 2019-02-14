import React from 'react';
import './NewArrivalCard.css';
// import shareButton from './../../assets/images/icons/share.png'
// import starButton from './../../assets/images/icons/star.png'

const NewArrivalCard = (props) => {
    return (
            <div className="newarrival-card">
               
                <h2 className="item-title">{props.title}</h2>
                    {/* <img className="item-share" src={shareButton} alt="share"/> */}
                    {/* <img id="item-star" src={starButton} alt="star"/> */}
               
                <hr/>
                <div className="item-content">
                    <span id="item-des"> Type :  </span>
                    <span id="item-res">{props.type}</span>
                </div>
                <div className="item-content">
                    <span id="item-des"> Date :  </span>
                    <span id="item-res">{props.date}</span>
                </div>
                <div className="item-content">
                    <span id="item-des"> Place :   </span>
                    <span id="item-res">{props.place}</span>
                </div>
                <div className="item-content">
                    <span id="item-des"> Scholarship :  </span>
                    <span id="item-res">{props.scholarship}</span>
                </div>
                <div className="item-content">
                    <span id="item-des"> Review :  </span>
                    <span id="item-res">{props.review}</span>
                </div>
           
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <span className="des-url"> <a href={props.url}> Know More </a> </span>
                </a>
            </div>
    );
}

export default NewArrivalCard;