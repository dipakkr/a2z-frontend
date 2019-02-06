import React from 'react';
import './NewArrivalCard.css';
import shareButton from './../../assets/images/icons/share.png'
import starButton from './../../assets/images/icons/star.png'

const NewArrivalCard = (props) => {
    return (
            <div className="newarrival-card">
               
                <h2 className="item-title">{props.title}</h2>
                    {/* <img className="item-share" src={shareButton} alt="share"/> */}
                    {/* <img id="item-star" src={starButton} alt="star"/> */}
               
                <hr/>
                <div className="item-content">
                    <span id="item-des"> Description :  </span>
                    <span id="item-res">{props.area}</span>
                </div>
                <div className="item-content">
                    <span id="item-des"> Date :  </span>
                    <span id="item-res">{props.area}</span>
                </div>
                <div className="item-content">
                    <span id="item-des"> Place :   </span>
                    <span id="item-res">{props.area}</span>
                </div>
                <div className="item-content">
                    <span id="item-des"> Description :  </span>
                    <span id="item-res">{props.area}</span>
                </div>

                {/* <span>
                    <span className="des-sp">Description :</span> 
                    {props.area}
                </span>
                <span>
                    <span className="des-sp">Date :</span> 
                    {'Best Conference in the world'}
                </span>
                <span>
                    <span className="des-sp">Place :</span> 
                    {'Frankfurt, Germany'}
                </span>
                <span>
                    <span className="des-sp">Scholarship :</span> 
                    <span className="des-sp-value">{'Not Applicable'}</span>  
                </span>
                
                <span>
                    <span className="des-sp">Frontbench Review :</span> 
                    {'All students should participate in this conference.'}
                </span>
                 */}
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <span className="des-url"> <a href={props.url}> Visit</a> </span>
                </a>
            </div>
    );
}

export default NewArrivalCard;