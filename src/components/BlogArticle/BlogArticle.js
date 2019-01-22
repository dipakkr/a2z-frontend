import React from 'react'
import './BlogArticle.css'
import ReactMarkdown from 'react-markdown'


const initialSource = `
The most overwhelming feeling for a young adult is to start his or her first job and TCS happened to my first job.

&nbsp;&nbsp;

This year, instead of visiting campuses; TCS conducted an all India based NQT (National Qualifier Test) to provide an equal opportunity for everyone throughout the country. NQT 2018 was conducted on 1st and 2nd September, 2018.

&nbsp;

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
The interviewer drew a pair of tables on a sheet and asked me how to make a particular selections. The answer needed the 
knowledge of joins in databases. The last question was to write a java program to implement multiple inheritance (using interface). 
The whole interview took about 25 minutes, but the time seemed to have flown away fast.

&nbsp;&nbsp;


After waiting for two hours again, I went for the HR interview. It was more of a conversation with two middle 
aged working women. I was asked the most vivid questions with unexpected ulterior intentions. In those 35 minutes, I 
talked about my hobbies, strengths, weaknesses and emerging technologies. The interview revolved around my opinion on time, 
work and social life management. I guess, one’s confidence is the key attribute which makes him or her get through an 
interview and confidence comes only with knowledge and awareness. With the fruition of the TCS recruitment process, 
I was happy and satisfied with my performance. 

&nbsp;&nbsp;

On 26th September, the results came out and I was selected.

&nbsp;&nbsp;

## Frontbench asks Arshita:- 

&nbsp;&nbsp;

1. **It’s considered, quite difficult to answer the two very routine question - ‘What’s your strength and weaknesses?’ 
Very often, an interviewer wants to assess, whether the candidate is optimist or pessimist via this question. 
And also, it’s a general perception that one should never reveal his/her weaknesses. 
What did you answer and what advice will you give to the aspirants?**

&nbsp;&nbsp;

**Arshita Says** :  There are some common questions which are asked in almost every interview you go for, and one such is your 
strengths and weaknesses. This question helps in revealing a lot about the interviewee. You should be clear 
about both these attributes of yours. **The strengths, you mention, should also be visible to the person sitting 
in front of you.** The answer should not appear to be hypothetical or as if you have mugged up. 
**While mentioning your weaknesses, always make the interviewer believe that you will never let your weakness 
undermine your work.** Bolster your mentioned attributes by giving examples. I was asked about my weaknesses and 
strengths during the HR interview. I mentioned that sometimes I am a little adamant about things and detaching from 
people I love being around is hard for me. 
Then the lady asked me to mention my strengths other than being confident. I told her about my optimistic and 
energetic attitude towards life.

&nbsp;&nbsp;


2. **How did you dress up for the interview? Is there anything specific, you want to share regarding the dress code?**

&nbsp;&nbsp;

**Arshita Says** : The attire you choose for an interview augments a lot to your confidence and body language. 
The dress one wears specifies a lot about his/her personality. It speaks about your sincerity, enthusiasm and willingness. 
One should be tidily dressed up. I wore a black colored formal summer suit and tied my hair in a neat ponytail. 

&nbsp;&nbsp;

3. **Which verbal language you chose to give your interview? Are you proficient in English?**
What advice will you give to candidates who are weak in communication skill and English? Does it affects the interview?

&nbsp;&nbsp;

**Arshita Says** :  Communication skills play a crucial role in the selection process. A person should be able to convey his/her message 
to the interviewer. Simple articulation in English is mandatory and sufficient for an interview. Anybody who wants to 
perform well in these interviews should start reading and speaking in English on regular basis. Eventually everything will 
fall into place and you will be comfortable with the language. The interviewer communicates in English and expects to get 
answers in the same. I spoke in English throughout.

&nbsp;&nbsp;

4. **Were you nervous at any point during the interview? If yes, how did you counter nervousness**

&nbsp;&nbsp;

**Arshita Says** : During the first few minutes on entering the cabin, I severely felt those pangs of nervousness. But I believe in the 
fact that one should never let it to outshadow the opportunity at hand. **I straightened myself, regained my confidence and 
started greeting the interviewers**

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
