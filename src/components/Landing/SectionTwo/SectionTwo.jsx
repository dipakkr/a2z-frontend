import React from 'react';
import './SectionTwo.css';
import campus from '../../../assets/images/university.svg';
import event from '../../../assets/images/events.svg';
import users from '../../../assets/images/users.svg';
import coding from '../../../assets/images/coding.svg';
import newsletter from '../../../assets/images/newsletter.svg';
import startup from '../../../assets/images/startup.svg';

const SectionTwo = (props) => {

  return (
    <div className="landing-page-section-2">
      <div className="row-container">
        <div className="left">
          <div className="landing-page-section-2-image-container">
            <img src={users} alt="user" className="image" />
          </div>
          <div className="text-img-separator"></div>
          <h2 className="title">14,000 Users</h2>
          <div className="text">
            <p>
            You can call them Users. For us, they are our family members. 
            </p>
          </div>
        </div>
        <div className="center">
          <div className="landing-page-section-2-image-container">
            <img src={campus} alt="contributor" className="image" />
          </div>
          <div className="text-img-separator"></div>
          <h2 className="title"> 50+ Campus </h2>
          <div className="text">
            <p>
              50+ is just a number. We are reaching a million hearts directly. 
           </p>
          </div>
        </div>
        <div className="right">
          <div className="landing-page-section-2-image-container">
            <img src={event} alt="event" className="image" />
          </div>
          <div className="text-img-separator"></div>
          <h2 className="title">500+ opportunities </h2>
          <div className="text">
            <p>
              All these make our community more empowered. They grab it with both hands. 
            </p>
          </div>
        </div>
      </div>
      <div className="row-container">
        <div className="left">
          <div className="landing-page-section-2-image-container">
            <img src={coding} alt="user" className="image" />
          </div>
          <div className="text-img-separator"></div>
          <h2 className="title"> Curated Resources </h2>
          <div className="text">
            <p>
             We hate Ctrl+c and Ctrl+v. For us, quality matters and not clicks, click baits and analytics. 
            </p>
          </div>
        </div>
        <div className="center">
          <div className="landing-page-section-2-image-container">
            <img src={startup} alt="contributor" className="image" />
          </div>
          <div className="text-img-separator"></div>
          <h2 className="title"> Learning Roadmaps </h2>
          <div className="text">
            <p>
              Experience meets novice at Frontbench. Why spend a hefty sum to learn? We give you the best 
              roadmap and even at times suggest The Road Less Taken.
              </p>
          </div>
        </div>
        <div className="right">
          <div className="landing-page-section-2-image-container">
            <img src={newsletter} alt="event" className="image" />
          </div>
          <h2 className="title"> Newsletter </h2>
          <div className="text">
            <p>
              We are a bit old fashioned. We love dropping curated postcards with 
              all you want to know. Events, Internships, Hackathons and what not.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
