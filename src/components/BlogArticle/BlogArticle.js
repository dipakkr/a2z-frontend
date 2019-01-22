import React from 'react'
import ReactDOM from 'react-dom'
import './BlogArticle.css'
import ReactMarkdown from 'react-markdown'

const JsonCSS={
	subtitle1:{
		color: '#444',
		
	}
}

const initialSource = `
### The most overwhelming feeling for a young adult is to start his or her first job and TCS happened to my first job.

This year, instead of visiting campuses; TCS conducted an all India based NQT (National Qualifier Test) to provide an equal opportunity for everyone throughout the country. NQT 2018 was conducted on 1st and 2nd September, 2018.

Before starting my preparation, I goggled about the exam pattern. There were two phases of the recruitment process :- Written Test and Interview. 10 days prior, I was informed about the test.

&nbsp;&nbsp;
#### **The written test was of 90 minutes and included four sections:**
&nbsp;
-   Verbal Ability
&nbsp; &nbsp;

-   Quantitative Analysis
	
&nbsp;&nbsp;
## **My Observation**
&nbsp;&nbsp;
### English
-   10 fill in the blanks type question.
&nbsp;    
-   Questions were easy.
&nbsp;   
-   Mostly related to ‘verb’ ,‘tenses’ and ‘modals’.
    
&nbsp;&nbsp;
### Aptitude
&nbsp;
-   Level of questions were easy to medium.
&nbsp;    
-   Aptitude was divided into two sections :- 10 Questions were Multiple Choice Question (MCQ) and 5 (five) were Integer Type Question.
&nbsp;    
-   These included topics like Profit & Loss, HCF LCM, Number System, Time & Work, Probability, Mixtures & Allegations and Ratio Proportion.
&nbsp;   
&nbsp;
### Programming Concepts
&nbsp;
-   Questions were from the topics like data types, arrays, string functions, structures, unions and pointers.
&nbsp;
-   Basic programming ability is enough to clear both the sections related to programming\n
    
&nbsp;&nbsp;
### Coding
&nbsp;
-   Only one question was asked in this round.
&nbsp;    
-   The question asked was to reassemble an input string into a particular way.
&nbsp;    
-   Coding question was and could have been done with basic programming skills.
&nbsp;    
-   Languages supported - C/C++/Java/Python
ground, downloading, merging, and uploading file modifications.
&nbsp;&nbsp;
I felt, that in the whole exam, there weren’t any tricky question but one need to have a strong conceptual knowledge to clear it. 

&nbsp;    

The result was declared after one week and on 12th September, I was called for the interview. 

&nbsp; 
&nbsp; 

This was my first ever interview. There were two stages in my interview - **technical and HR**. 
Initially, my excitement knew no bounds but after waiting for eight hours, my behaviour changed nonchalantly. 
It was only when, I was called for the interview, I regained my enthusiasm. (Remember, Interviews test not just 
your knowledge but also your perseverance and grit.)
&nbsp;&nbsp;
The interviewer asked me to give a brief introduction and then asked around twenty general questions from the 
subjects like **OS, DBMS, C and Java programming**. Out of these, I managed to give sixteen to seventeen answers. 
The interviewer drew a pair of tables on a sheet and asked me how to make a particular selections. The answer needed the knowledge of joins in databases. The last question was to write a java program to implement multiple inheritance (using interface). 
The whole interview took about 25 minutes, but the time seemed to have flown away fast.

`

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
							<a href="https://www.facebook.com/sharer/sharer.php?u=#url"><i className={'fab fa-facebook-square'}></i></a>
							<a href={`whatsapp://send?text=${window.location}`}><i className={'fab fa-whatsapp'}></i></a>
							<a href={`https://twitter.com/share?url=${window.location}`}><i className={'fab fa-twitter'}></i></a>
						</span>
					</li>
				</ul>
			</div>
			<div className={'blog-content'} id='content'>
				<ReactMarkdown source={initialSource} />
			</div>
		</>
		)
	}
}
export default Content
