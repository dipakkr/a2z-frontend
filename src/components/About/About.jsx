import React from 'react';
import './About.css';
import about from './../../assets/images/aboutus.jpg';

const About = (props) => {
    return (
        <div className="about-page-container">
            <div className="about-container">
                 <img src={about} alt="src-google" className="" />
                 <p className="about-p">
                
                 <br/>
                 We are a community working to enable, empower and enlighten those students across the country who don’t have access to right guidance and mentorship.
                 <br/><br/>
                 It will just take a few people and some love to empower the student community and The Front Bench is home to all such amazing individuals.
                 <br/><br/>
                 We believe in creating a democratised and a free platform where a student can visit and know how to do, what he wants to do.
                 <br/><br/>
                 From individuals to working professionals and experts, we provide a platform to everyone to talk about their experiences and share their knowledge and expertise with the world.
                 <br/><br/>
                 <hr/>
                 <br/>
                 <p className="about-p-title" >EDUCATION AND GUIDANCE NEEDS TO BE DEMOCRATISED</p>
                 <br/>
                 
                 We believe that intent and conviction is more important than power and system to fix something which isn’t right. 
                 In this digital age, even though information is a click away, according to AICTE, out of 1 million graduates passing out as 
                 engineers every year, a whooping 60% is unemployable. A majority of the students of Tier 2 / Tier  3 engineering college, 
                 often can’t figure out, what to do and what not to.  Google Summer of Codes or ACM ICPC seems alien to them. 
                 According to our internal survey done on over 10,000 students - 
                 <br/><br/>

                 <ul className="list-grp">
                    <li>70% of them said that, “I didn't have any guidance”</li>
                    <li>75% of them said that, “I was not aware of the available opportunities”</li>
                    <li>67% of them said that, “I was confused which tech stack to choose to get a good Job”</li>
                    <li>72% of them said that,”I am actively looking for a mentor”</li>
                    <li>80% of them were from TIER 2 or 3 institution. </li>
                </ul>

                <br/>
                We believe in creating a community, where people become enabler to empower students who are in dire need of educational support 
                and guidance. We love sharing details about hackathons, conferences, foreign internships and roadmaps to get good employment 
                and hence in becoming an empowered citizen of New India.
                <br/><br/>
                <hr/>

                <br/>
                <p className="about-p-title" >MAKING STUDENTS LESS IGNORANT AND MORE INFORMED</p>
                <br/>

                We believe, that every human being has an intention, to do something meaningful. We don’t discriminate students, 
                on the basis, of the type of institutions, they come from. For us, everyone is equal. We are of the opinion, 
                that if we can guide our students better, we can create a million quality professionals everyyear.   
                <br/><br/>
                <hr/>

                <br/>
                <p className="about-p-title">CAN A WEB PORTAL REALLY SOLVE THE ABOVE MENTIONED PROBLEM?</p>
                <br/>

                We believe that a generation exposed to more meaningful content is more likely to have a healthy thought process. We would be 
                helping students, right from the scratch. We would provide mentorship, to students on what to do in their life. 
                A community, where experience guides novice, will do wonders! 

                <br/><br/>
                <hr/>

                <br/>
                <p className="about-p-title">HOW DO WE PAY OUR BILLS?</p>
                <br/>

                We are currently a voluntary organisation. But we do need money to make payments to the web server holding our website. Till now, 
                we are cutting our pocket money and thus managing our expenditure. We would love to sit with you over a cup of coffee, 
                if you want to help us financially. 
                <br/><br/>
                <hr/>

                <br/>
                <p className="about-p-title">VALUES WE BELIEVE IN</p>
                <br/>
                Empathy, Coexistence, Volunteerism and Curiosity.
                <br/><br/>
                <hr/>

                <br/>
                <p className="about-p-title"> FRONTBENCH CREW </p>
                <br/>

                Sorry, to disappoint you. Front Bench crew doesn’t have an IIT - IIM grads on it’s board. We are passionate, enthusiast and self - motivated people. 
                We have volunteers from more than 70 institutions all across this country. 
                <br/><br/>

                Coffee, some self-motivation and people’s love are what keeps us going!


                </p>
                             
            </div>
        </div>
    );
}

export default About;