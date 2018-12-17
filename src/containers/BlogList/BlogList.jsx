import React from 'react';
import './BlogList.css';
import BlogListCard from '../../components/BlogListCard/BlogListCard';

const BlogList = (props) => {
  return (
    <div className="blog-page-container">
      <div className="blog-container blog-background">
        <h1 className="blog-h1">Campus Stories </h1>
      </div>

      <div className="blog-list-container">
        <BlogListCard />
      </div>
    </div>
  );
}

export default BlogList;