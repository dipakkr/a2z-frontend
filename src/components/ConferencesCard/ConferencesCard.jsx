import React from 'react';
import './ConferencesCard.css';

const ConferencesCard = (props) => {
    return (
        // <a href={props.link} target="_blank" rel="noopener noreferrer">
        //     <div className="conferences-card">
        //         <div className="conferences-card-cover">
        //             <h2>{props.title} <span aria-label="open" role="img" id="reveal"></span></h2>
        //         </div>
        //         <p><span>Date:</span> {props.date}</p>
        //         <p><span>Place:</span> {props.place}</p>
        //         {/* <p><span>Deadline:</span> {props.deadline}</p> */}
        //         <p><span>Field:</span> {props.type}</p>
        //         <p><span>Travel Reimbursement:</span> {props.coverage}</p>
        //     </div>
        // </a>

        <div className="newarrival-card">
               
                <h2 className="item-title">{props.title}</h2>
                    {/* <img className="item-share" src={shareButton} alt="share"/> */}
                    {/* <img id="item-star" src={starButton} alt="star"/> */}
               
                <hr/>
                {/* <div className="item-content">
                    <span id="item-des"> Description :  </span>
                    <span id="item-res">{props.date}</span>
                </div> */}
                <div className="item-content">
                    <span id="item-des"> Date :  </span>
                    <span id="item-res">{props.date}</span>
                </div>
                <div className="item-content">
                    <span id="item-des"> Place :   </span>
                    <span id="item-res">{props.place}</span>
                </div>
                <div className="item-content">
                    <span id="item-des"> Type :  </span>
                    <span id="item-res">{props.type}</span>
                </div>
                <div className="item-content">
                    <span id="item-des"> Scholarship :  </span>
                    <span id="item-res">{props.coverage}</span>
                </div>

                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <span className="des-url"> <a href={props.url}> Visit</a> </span>
                </a>
            
            </div>
    );
}

export default ConferencesCard;