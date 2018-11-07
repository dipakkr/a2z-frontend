import React from 'react';
import './ResourceCard.css';
import { Link } from 'react-router-dom';
import Tags from '../Tags/Tags';


const ResourceCard = (props) => {

    const image = (props.icon) ? <span><img src={props.icon} alt="" /></span> : null;

    return (
        <div className="resource-card">
            <h2>
                <span>
                    {image}
                    {props.title}
                </span>
                <span
                    className="fa fa-star"
                    onClick={() => props.bookmark(props.title)}
                    style={{ 
                        cursor: 'pointer',
                        textShadow: '1px 2px 10px rgba(0,0,0,0.3)',
                        color: props.isBookmarked ? props.color : 'white'
                    }}>
                </span>
            </h2>
            <p>Total Links: {props.linksCount}</p>
            <div className="resource-card-tags">
                {props.tags.map(tag => (
                    <Tags 
                        key={tag}
                        text={tag}
                        background={props.tagColor[tag]}/>
                ))}
            </div>
            <Link to={props.url}>
                <button
                    style={{ borderColor: props.color, backgroundColor: props.color }}>
                    Explore&nbsp; ➡
                </button>
            </Link>
        </div>
        
    );
}

export default ResourceCard;