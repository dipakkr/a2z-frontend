import React from 'react';
import './BlogListCard.css';
import { Link } from 'react-router-dom'

const BlogListCard = (props) => {
  return (
    <div className="blog-individual">
          <div className="blog-img">
            <img width="100px" height="100px" src={props.image} alt="blog" />
          </div>
          <div className="blog-data">
            <a href={props.url} >
              <p className="blog-title"><Link to={`blog/${props.slug}`}>{props.title}</Link></p>
            </a>
            <p className="blog-author-container"> <span className="blog-author">{props.author}</span></p>
            <p className="blog-date">{props.date}</p>
          </div>
        </div>
  );
}

export default BlogListCard;