import React from 'react';
import './BlogList.css';
import BlogListCard from '../../components/BlogListCard/BlogListCard';
import {Route} from 'react-router-dom'
import Content from '../../components/BlogArticle/BlogArticle'
import Modal from '../Modal/Modal';
export default class BlogList extends React.Component {

  state = {
    blogs: [
      {
        id: 1, // "23834304"
        title: "Exploiting Developer Infrastructure Is Ridiculously Easy",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15-08-2020", //I'm not sure what format date will be sent hence using String for now
        url: "."
      },
      {
        id: 2, //"1232323"
        title: "We Won’t Text Back When We’re Dead",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15-08-2020", //I'm not sure what format date will be sent hence using String for now
        url: "."
      },
      {
        id: 3, //"83298"
        title: "The Dirty Secret of Elite College Admissions",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15-08-2020", //I'm not sure what format date will be sent hence using String for now
        url: "."
      },
      {
        id: 4, //"495445"
        title: "London branch of the Apple Store",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15-08-2020", //I'm not sure what format date will be sent hence using String for now
        url: "."
      },
      {
        id: 5, //"23834304"
        title: "Exploiting Developer Infrastructure Is Ridiculously Easy",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15-08-2020", //I'm not sure what format date will be sent hence using String for now
        url: "."
      },
      {
        id: 6, //"1232323"
        title: "We Won’t Text Back When We’re Dead",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15-08-2020", //I'm not sure what format date will be sent hence using String for now
        url: "."
      },
      {
        id: 7, //"83298"
        title: "The Dirty Secret of Elite College Admissions",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15-08-2020", //I'm not sure what format date will be sent hence using String for now
        url: "."
      },
      {
        id: 8, //"495445"
        title: "London branch of the Apple Store",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15-08-2020", //I'm not sure what format date will be sent hence using String for now
        url: "."
      },
      {
        id: 9, //"23834304"
        title: "Exploiting Developer Infrastructure Is Ridiculously Easy",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15-08-2020", //I'm not sure what format date will be sent hence using String for now
        url: "."
      },
      {
        id: 10, //"1232323"
        title: "We Won’t Text Back When We’re Dead",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15-08-2020", //I'm not sure what format date will be sent hence using String for now
        url: "."
      },
      {
        id: 11, //"83298"
        title: "The Dirty Secret of Elite College Admissions",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15-08-2020", //I'm not sure what format date will be sent hence using String for now
        url: "."
      },
      {
        id: 12, //"495445"
        title: "London branch of the Apple Store",
        img: "https://via.placeholder.com/100",
        author: "Anonymous",
        date: "15-08-2020", //I'm not sure what format date will be sent hence using String for now
        url: "."
      },
    ]
  }

  render() {
    return (
      <div className="blog-page-container">
        <div className="blog-container blog-background">
          <h1 className="blog-h1">Campus Stories </h1>
        </div>
        <div className="blog-list-container">
          {this.state.blogs.map(blog => {
            return (
				<>
				<Route exact path={`/bsr125dev/${blog.id}`} render={()=>{
					return <Modal onClose={
					  ()=>{
						  window.history.pushState({},'','/bsr125dev')
						  }
						  }/>
				}}></Route>
              <BlogListCard
                key={blog.id}
                img={blog.img}
                title={blog.title}
                author={blog.author}
                date={blog.date}
                url={`/bsr125dev/${blog.id}`}
				id={blog.id}
              />
			  </>
            );
          })}
        </div>
      </div>
    );
  }
}