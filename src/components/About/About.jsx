import React from 'react';
import './About.css';

const About = (props) => {
    return (
        <div className="about-page-container">
            <div className="about-container">
                <h1>FrontBench <span> | Empowering Youths</span></h1>
                
                <p className="about-p">
                Hi,<br/><br/>

                Are you a college student or a working professional looking for resources to learn a new coding language ? 
                Are you looking to meet new people in your community or searching for global conferences, hackathons, competitions, fellowships, 
                internships and bootcamps to participate and ? If so, please continue reading.  If not, you should read too. 

                <br/><br/>
               
                Very often, people from TIER 3 institutions complain that they didn’t have good ecosystem in college or they didn't have any guidance 
                in college or they missed many opportunities due to lack of awareness. The problem isn't that they aren't hard working 
                or sincere but the real problem is in the fact that they aren't aware of the opportunities available to them. 

                <br/><br/>

                How to begin? Where to begin? Be it for anything. Though Internet is available everywhere, the thing is that, at least 
                they should have heard of the word before they can even google it.
                
                <br/><br/>
               
                To get a depth insight on this problem, We conducted a survey on 1000+ students got some eye opening insights. 
                <br/><br/>

                <ul className="list-grp">
                    <li>70% of them said that, “I didn't have any guidance”</li>
                    <li>75% of them said that, “I was not aware of the available opportunities”</li>
                    <li>67% of them said that, “I was confused which tech stack to choose to get a good Job”</li>
                    <li>72% of them said that,”I am actively looking for a mentor”</li>
                    <li>80% of them were from TIER 2 or 3 institution. </li>
                </ul>

                <br/><br/>

                To Solve this problem,  We at FrontBench built a platform where you can find everything you need whether it is Coding resources, Hackathons, Competitions, Conferences, 
                Scholarship programs, Community events or guidance in getting started with anything. 

                <br/><br/>

                Our Vision to empower every youth of the country. We believe that quality education and a mentor/coach in life is key to achieve every single thing in life. 

                <br/><br/>

                Come Join Us and be a FrontBencher in life !!
                
                <br/><br/>
                Thank You,<br/>
                Team FrontBench
                </p>
                             
            </div>
        </div>
    );
}

export default About;