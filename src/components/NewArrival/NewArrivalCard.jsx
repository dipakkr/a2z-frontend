import React from 'react';
import './NewArrivalCard.css';

const NewArrivalCard = (props) => {
    return (
       
            <div className="meetups-card">
                <h3>{props.title}</h3>
                <hr/>
                <span><span className="des-sp">Description:</span> {props.area}</span>
                <span><span className="des-sp">Date :</span> {'Best Conference in the world'}</span>
                <span><span className="des-sp">Place:</span> {'Frankfurt, Germany'}</span>
                
                <span><span className="des-sp">Frontbench Review :</span> {'All students should participate in this conference.'}</span>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                <span><span className="des-sp">Visit URL :</span> {'https://frontbench.xyz/1234'}</span>
                </a>
            </div>
        
    );
}

export default NewArrivalCard;