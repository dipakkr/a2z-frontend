import React from 'react';
import './BlogListCard.css';
import Tags from '../../components/Tags/Tags';

const BlogListCard = (props) => {
  return (
    <>
      {props.data.map((card) => {
        return (
          <div className="blog-individual" key={card.id}>
            <div className="blog-img">
              <img src={card.img} alt="blog" />
            </div>
            <div className="blog-data">
              <p className="blog-title">{card.title}</p>
              <p className="blog-author-container"> Author:
              <span className="blog-author">{card.author}</span>
                <span className="blog-date">{card.date}</span>
              </p>
              <div className="blog-tag">
                <Tags
                  key={card.tags.key}
                  text={card.tags.text}
                  background={card.tags.background} />
              </div>
            </div>
          </div>

        );
      })}
    </>
  );
}

export default BlogListCard;