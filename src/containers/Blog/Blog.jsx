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
          <p>Title</p>
        </div>
        <div className="blog-individual">
          <p>Title</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;