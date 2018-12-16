import React from 'react';
import './Blog.css';

const Blog = (props) => {
  return (
    <div className="blog-page-container">
      <div className="blog-container blog-background">
        <h1 className="blog-h1">Blog </h1>
      </div>

      <div className="blog-list-container">
        <div className="blog-individual">
          <p className="blog-title">Exploiting Developer Infrastructure Is Ridiculously Easy</p>
          <p className="blog-author">By <b>Anonymous</b> on <b>15.08.2020</b></p>
        </div>
        <div className="blog-individual">
          <p className="blog-title">The tipping point of Persuasive Design</p>
          <p className="blog-author">By <b>Anonymous</b> on <b>15.08.2020</b></p>
        </div>
      </div>
    </div>
  );
}

export default Blog;