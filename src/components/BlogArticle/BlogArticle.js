import React, {/*{useState, useEffect}*/} from 'react' //will be needing those when fetching from remote server
import './BlogArticle.css'
import {Redirect} from 'react-router-dom'
import getRenderedJSON from './Helper'
import injectSheet from 'react-jss'
const JsonCSS={
	subtitle1:{
		color: '#444',
		
	}
}
const JsonElem={
	component:  'div',
	props: {
		className: 'text',
		children: [
			{
				component:  'p',
				props: {
					className: 'text',
					children: 'The most overwhelming feeling for a young adult is to start his or her first job and TCS happened to be my first job.'
				}
			},
			{
				component:  'p',
				props: {
					className: 'text',
					children: [
						{
							component: 'span',
							props: {
								children: 'This year, instead of visiting campuses; TCS conducted an all India based NQT (National Qualifier Test) to provide an equal opportunity for everyone throughout the country. NQT 2018 was conducted on 1'
							}
						},
						{
							component:  'sup',
							props: {
								children: 'st'
							}
						},
						{
							component: 'span',
							props: {
								children: 'and 2'
							}
						},
						{
							component:  'sup',
							props: {
								children: 'nd'
							}
						},
						{
							component: 'span',
							props: {
								children: ' September, 2018.'
							}
						}
					]
				}
			},
			{
				component:  'p',
				props: {
					className: 'text',
					children: [
						{
							component: 'span',
							props: {
								children: 'Before starting my preparation, I goggled about the exam pattern. There were two phases of the recruitment process :-'
							}
						},
						{
							component:  'b',
							props: {
								children: 'Written Test'
							}
						},
						{
							component: 'span',
							props: {
								children: ' and '
							}
						},
						{
							component:  'b',
							props: {
								children: 'Interview'
							}
						},
						{
							component: 'span',
							props: {
								children: ' 10 days prior, I was informed about the test.'
							}
						}
					]
				}
			},
			{
				component:  'p',
				props: {
					className: 'text',
					children: 'The written test was of 90 minutes and included four sections'
				}
			},
			{
				component: 'ul',
				props: {
					children: [
						{
							component: 'li',
							props: {
								children: 'Verbal Activity'
							}
						},
						{
							component: 'li',
							props: {
								children: 'Quantative Analysis'
							}
						},
						{
							component: 'li',
							props: {
								children: 'Programming Concepts'
							}
						},
						{
							component: 'li',
							props: {
								children: 'Coding'
							}
						},
					]
				}
			},
			{
				component: 'h2',
				props: {
					className: {JsonCSS},
					children: 'My Observations for section in NQT'
				}
			},
			{
				component: 'h3',
				props: {
					className: 'subtitle3',
					children: 'English'
				}
			},
			{
				component: 'div',
				props: {
					className: 'block-text',
					children: [
						{
							component: 'ul',
							props: {
								children: [
									{
										component: 'li',
										props: {
											children: '10 fill in the blanks type questions'
										}
									},
									{
										component: 'li',
										props: {
											children: 'Questions were easy'
										}
									},
									{
										component: 'li',
										props: {
											children: "Mostly related to 'verb', 'tenses', and 'modals'"
										}
									},
								]
							}
						},
					]
				}
			},
		]
	}
}
const BlogContent=props=>{
	return (
		<>
		<p className={'text'}>
			The most overwhelming feeling for a young adult is to start his or her first job and TCS happened to be my first job.
		</p>
		<p className={'text'}>
		This year, instead of visiting campuses; TCS conducted an all India based NQT (National Qualifier Test) to provide an equal opportunity for everyone throughout the country. NQT 2018 was conducted on 1<sup>st</sup> and 2<sup>nd</sup> September, 2018.
		</p>
		<p className={'text'}>
		Before starting my preparation, I goggled about the exam pattern. There were two phases of the recruitment process :-
		<b>Written Test</b> and <b>Interview</b>. 10 days prior, I was informed about the test.
		</p>
		<p className={'text'}>
		The written test was of 90 minutes and included four sections
		</p>
		<ul>
			<li>
				Verbal Activity
			</li>
			<li>
				Quantitative Analysis
			</li>
			<li>
				Programming Concepts
			</li>
			<li>
				Coding
			</li>
		</ul>
		<h2 className={'subtitle1 text-center'}>
			My Observations for section in NQT
		</h2>
		<h3 className={'subtitle2'} >
			English
		</h3>
		<div className={'block-text'}>
			<ul>
				<li>
					10 fill in the blanks type questions
				</li>
				<li>
					Questions were easy
				</li>
				<li>
					Mostly related to 'verb', 'tenses', and 'modals'
				</li>
			</ul>
		</div>
		</>
	)
}
const Content=props=>{
	let maybe=getRenderedJSON(JsonElem)//BlogContent().props.children
	if(parseInt(props.match.params.id)>0){ //logic to check valid blog id
		return(
		<>
			<h1 className={'blog-heading'}>
				Placement at TCS<br />
				{` Blog id: ${props.match.params.id}`} {/*content to be fetched from server with this blog id */}
			</h1>
			<div className={'post-heading'}>
			<ul className={'post-heading-ul'}>
				<li>
				<span className={'blog-author'}>
					author&nbsp;<span className={'name'}>{'Arisha Tomar'/* to be fetched from backend */}</span>
				</span>
				</li>
				<li>
				<time>
					posted on&nbsp;<span>{Date()}</span>
				</time>
				</li>
				<li>
				<span className={'blog-shares'}>
				share on
					<a href="https://www.facebook.com/sharer/sharer.php?u=#url"><i className={"fab fa-facebook-square"}></i></a>
					<a href={`whatsapp://send?text=${window.location}`}><i className={"fab fa-whatsapp"}></i></a>
					<a href={`https://twitter.com/share?url=${window.location}`}><i className={"fab fa-twitter"}></i></a>
				</span>
				</li>
				</ul>
			</div>
			<div className={'blog-content'} id='content'>
			{<BlogContent />}
			{maybe}
			</div>
		</>
		)
	}
	return <Redirect to={'/lost'} />
}
export default Content
