import React from 'react';
import './BlogListCard.css';
import Content from '../BlogArticle/BlogArticle'
import Modal from '../../containers/Modal/Modal'
class BlogListCard extends React.Component{
	constructor(props){
		super(props)
		this.state={
			showModal:false,
			...props,
		}
		this.handleClick=this.handleClick.bind(this)
	}
	handleClick(event){
		event.preventDefault()
		window.history.pushState({},'',`/bsr125dev/${this.state.id}`)
		this.setState(prevState=>({...prevState,showModal: !prevState.showModal}))
	}
	render(){
		return (
			<div className="blog-individual">
				  <div className="blog-img">
					<img src={this.state.img} alt="blog" />
				  </div>
				  <div className="blog-data">
					<a href={this.state.url} onClick={this.handleClick}>
					  <p className="blog-title">{this.state.title}</p>
					</a>
					<p className="blog-author-container">by, <span className="blog-author">{this.state.author}</span></p>
					<p className="blog-date">{this.state.date}</p>
				  </div>
				  {this.state.showModal?<Modal onClose={
					  ()=>{
						window.history.pushState({},'','/bsr125dev')
						this.setState(prev=>({...prev,showModal: false}))
						  }
						  } />:null}
				</div>
				)
	}
}

/*const BlogListCard = (props) => {
	const article={title: props.title,text:"Lorem Ipsum Dolor Sit Amet"}
  return (
    <div className="blog-individual">
          <div className="blog-img">
            <img src={props.img} alt="blog" />
          </div>
          <div className="blog-data">
            <a href={props.url} onClick={(e)=>{
				e.preventDefault()
				window.history.pushState({},'',props.id)
				}}>
              <p className="blog-title">{props.title}</p>
            </a>
            <p className="blog-author-container">by, <span className="blog-author">{props.author}</span></p>
            <p className="blog-date">{props.date}</p>
          </div>
        </div>
  );
}*/


export default BlogListCard;