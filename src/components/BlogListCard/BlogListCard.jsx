import React from 'react';
import './BlogListCard.css';
import { Link } from 'react-router-dom'

const BlogListCard = (props) => {
  return (
    <div className="blog-individual">      
          <img className="blog-img" src={props.image} alt="blog" />
          <div className="blog-data">
              <a href={props.url} >
                <p className="blog-title"><Link to={props.slug}>{props.title}</Link></p>
              </a>
              <span className="author"> {props.author} </span>
              <div className="blog-des">
                  <span className="blog-tag">{props.tag}</span> 
                  <span className="blog-date">{props.date}</span>
              </div>
          </div>
    </div>
  );
}

export default BlogListCard;