import React, {useState, useEffect} from 'react'
/*class Content extends React.Component {
	constructor(){
		super(props)
	}
	render(){
		console.log('Content mounted!')
		return(<>
		<h1>{this.props.title}</h1>
		<p>
			{this.props.content}
		</p>
		</>
		)
	}
}*/
const Content=props=>{
	console.log('Content mounted!')
		return(<>
		<h1>{props.title}</h1>
		<p>
			{props.content}
		</p>
		</>
		)
}
/*function Content(props){
	const [article,setArticle]=useState(props.article)
	return(<>
		<h1>{article.title}</h1>
		<p>
			{article.text}
		</p>
		</>
		) 
}*/
export default Content