import React from 'react'
import './BlogArticle.css'
import * as contentful from 'contentful'
import marked from 'marked'
import ReactMarkdown from 'react-markdown'

class BlogArticle extends React.Component{
	constructor(){
		super()
		this.state = {article : null}
	}

	componentDidMount(){
		const {params} = this.props
		var client = contentful.createClient({
			space: '84ay66u6qghp',
   			accessToken: 'd442023af610d84c254c3753d8a70f867727cfa98a28e33ae379f8c006ffc6c7' 
		  })

		  client.getEntries({content_type : 'post'})
			.then((response)=>{
				this.setState({article : response.items[1]})
				console.log(response.items);
			  })
		
		
		  
		// if(params && params.slug){
		// 	client.getEntries({content_type : 'post', 'fields.slug' : params.slug})
		// 	.then((response)=>{
		// 		this.setState({article : response.items[0]})
		// 		console.log(response.items);
		// 	  })
		// }
	}
	getParsedMarkdown(content){
		return{
			__html : marked(content, {sanitize : true})
		}
	}

	render(){
		if(!this.state.article){
			console.log(this.state.article)
			return <h1> Loading ...</h1>
		}
		
		return (
			<>
			<h1 className={'blog-heading'}>
				{this.state.article.fields.title} {/*`content to be fetched from server with this blog id */}
			</h1>

			<div className={'post-heading'}>
				<ul className={'post-heading-ul'}>
					<li>
						<span className={'blog-author'}>
					&nbsp;<span className={'name'}>{this.state.article.fields.author.fields.name}</span>
						</span>
					</li>
					<li>
						<time>
					posted on&nbsp;<span>{this.state.article.fields.publishedDate}</span>
						</time>
					</li>
					<li>
						<span className={'blog-shares'}>
				
							<a href="https://www.facebook.com/sharer/sharer.php?u=#url"><i className={'fab fa-facebook-square'}></i></a>
							<a href={`whatsapp://send?text=${window.location}`}><i className={'fab fa-whatsapp'}></i></a>
							<a href={`https://twitter.com/share?url=${window.location}`}><i className={'fab fa-twitter'}></i></a>
						</span>
					</li>
				</ul>
			</div>
			<div className={'blog-content'} id='content'>
				{/* {this.getParsedMarkdown(this.state.article.fields.content)} */}
				<ReactMarkdown source={this.state.article.fields.content} />
			</div>
		</>
		)
	}
}

export default BlogArticle

// const Content=props=>{
	
// 	if(parseInt(props.match.params.id)>0){ //logic to check valid blog id
// 		return(
		// <>
		// 	<h1 className={'blog-heading'}>
		// 		Placement at TCS<br />
		// 		{ `Blog id: ${props.match.params.id}` } {/*`content to be fetched from server with this blog id */}
		// 	</h1>

		// 	<div className={'post-heading'}>
		// 		<ul className={'post-heading-ul'}>
		// 			<li>
		// 				<span className={'blog-author'}>
		// 			&nbsp;<span className={'name'}>{'Arisha Tomar'}</span>
		// 				</span>
		// 			</li>
		// 			<li>
		// 				<time>
		// 			posted on&nbsp;<span>{Date()}</span>
		// 				</time>
		// 			</li>
		// 			<li>
		// 				<span className={'blog-shares'}>
				
		// 					<a href="https://www.facebook.com/sharer/sharer.php?u=#url"><i className={'fab fa-facebook-square'}></i></a>
		// 					<a href={`whatsapp://send?text=${window.location}`}><i className={'fab fa-whatsapp'}></i></a>
		// 					<a href={`https://twitter.com/share?url=${window.location}`}><i className={'fab fa-twitter'}></i></a>
		// 				</span>
		// 			</li>
		// 		</ul>
		// 	</div>
		// 	<div className={'blog-content'} id='content'>
				
		// 	</div>
		// </>
// 		)
// 	}
// }
// export default Content
