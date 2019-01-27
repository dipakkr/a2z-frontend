import React from 'react'
import './BlogArticle.css'

const Content=props=>{
	
	if(parseInt(props.match.params.id)>0){ //logic to check valid blog id
		return(
		<>
			<h1 className={'blog-heading'}>
				Placement at TCS<br />
				{ `Blog id: ${props.match.params.id}` } {/*`content to be fetched from server with this blog id */}
			</h1>

			<div className={'post-heading'}>
				<ul className={'post-heading-ul'}>
					<li>
						<span className={'blog-author'}>
					&nbsp;<span className={'name'}>{'Arisha Tomar'}</span>
						</span>
					</li>
					<li>
						<time>
					posted on&nbsp;<span>{Date()}</span>
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
				
			</div>
		</>
		)
	}
}
export default Content
