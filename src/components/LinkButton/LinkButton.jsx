import React from 'react';
import './LinkButton.css';
import Tags from '../Tags/Tags';

const LinkButton = (props) => {
    return (
        <a href={props.link}>
            <button className="link-button">
                <p>{props.description}</p>
                <div className="link-tags">
                    Tags:&nbsp;
                    <span>
                        {props.tags.map(tag => (
                            <Tags text={tag} background={props.tagColors[tag]} key={tag} />
                        ))}
                    </span> 
                </div>
            </button>
        </a>
    );
}

export default LinkButton;