import React from 'react';
import './Blog.css';

const Blog = (props) => {
  return (
    <div className="blog-page-container">
      <div className="blog-container blog-background">
        <h1 className="blog-h1">Campus Stories </h1>
      </div>

      <div className="blog-list-container">
        <div className="blog-individual">
          <div className="blog-img">
            <img src="https://via.placeholder.com/100 " alt="blog" />
          </div>
          <div className="blog-data">
            <p className="blog-title">Exploiting Developer Infrastructure Is Ridiculously Easy</p>
            <p className="blog-author-container"> Author:
              <span className="blog-author">Anonymous</span>
              <span className="blog-date">15.08.2020</span>
            </p>
          </div>
        </div>
        <div className="blog-individual">
          <div className="blog-img">
            <img src="https://via.placeholder.com/100 " alt="blog" />
          </div>
          <div className="blog-data">
            <p className="blog-title">A Study Plan To Cure JavaScript Fatigue</p>
            <p className="blog-author-container"> Author:
              <span className="blog-author">Anonymous</span>
              <span className="blog-date">15.08.2020</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;