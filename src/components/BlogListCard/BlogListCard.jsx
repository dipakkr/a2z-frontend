import React from 'react';
import './BlogListCard.css';

const BlogListCard = (props) => {
  return (
    <div className="blog-individual">
          <div className="blog-img">
            <img src={props.img} alt="blog" />
          </div>
          <div className="blog-data">
            <a href={props.url}>
              <p className="blog-title">{props.title}</p>
            </a>
            <p className="blog-author-container">by, <span className="blog-author">{props.author}</span></p>
            <p className="blog-date">{props.date}</p>
          </div>
        </div>
  );
}

export default BlogListCard;