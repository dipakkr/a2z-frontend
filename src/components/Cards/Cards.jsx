import React from 'react';
import './Cards.css';
import CardLink from './CardLink/CardLink';

const Cards = (props) => {
    return (
        <div className="cards-container">
            {props.cards.map((card) => {
                return (
                    <CardLink
                        key={card.title}
                        title={card.title}
                        href={card.link}
                        png={card.png}
                        color={card.color} />
                );
            })}
        </div>
    );
}

export default Cards;