import React from 'react';
import './BlogListCard.css';
import { Link } from 'react-router-dom'

const BlogListCard = (props) => {
  return (
    <div className="blog-individual">
          
          <img className="blog-img" src={props.image} alt="blog" />
          
          <div className="blog-data">

              <a href={props.url} >
                <p className="blog-title"><Link to={`blog/${props.slug}`}>{props.title}</Link></p>
              </a>
              
              <span className="author"> {props.author} </span>
              
              <div className="blog-des">
                  <span className="blog-tag">{'Startup'}</span> 
                  <span className="blog-date">{'Feb 12, 2019'}</span>
              </div>
          </div>
    </div>
  );
}

export default BlogListCard;