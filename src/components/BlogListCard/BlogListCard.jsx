import React from 'react';
import './BlogListCard.css';
import Tags from '../../components/Tags/Tags';

const BlogListCard = (props) => {
  return (
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
        <div className="blog-tag">
          <Tags
            key="something"
            text="Blockchain"
            background="blue" />
        </div>
      </div>
    </div>
  );
}

export default BlogListCard;