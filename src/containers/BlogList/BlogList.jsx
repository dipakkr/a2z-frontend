import React from 'react';
import './BlogList.css';
import BlogListCard from '../../components/BlogListCard/BlogListCard';

export default class BlogList extends React.Component {

  state = {
  }

  render() {
    const blogData = [
      {
        id: "23834304",
        title: "Exploiting Developer Infrastructure Is Ridiculously Easy",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15.8.2020", //I'm not sure what format date will be sent hence using String for now
        tags: {
          key: "something",
          text: "Blockchain",
          background: "blue"
        }
      },
      {
        id: "1232323",
        title: "We Won’t Text Back When We’re Dead",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15.8.2020", //I'm not sure what format date will be sent hence using String for now
        tags: {
          key: "something",
          text: "Machine Learning",
          background: "red"
        }
      },
      {
        id: "83298",
        title: "The Dirty Secret of Elite College Admissions",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15.8.2020", //I'm not sure what format date will be sent hence using String for now
        tags: {
          key: "something",
          text: "Data Science",
          background: "green"
        }
      },
      {
        id: "495445",
        title: "London branch of the Apple Store",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15.8.2020", //I'm not sure what format date will be sent hence using String for now
        tags: {
          key: "something",
          text: "Machine Learning",
          background: "yellow"
        }
      },
    ];
    return (
      <div className="blog-page-container">
        <div className="blog-container blog-background">
          <h1 className="blog-h1">Campus Stories </h1>
        </div>
        <div className="blog-list-container">
          <BlogListCard data={blogData} />
        </div>
      </div>
    );
  }
}