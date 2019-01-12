import React from 'react';
import './SectionTwo.css';
import campus from '../../../assets/images/university.svg';
import event from '../../../assets/images/events.svg';
import user from '../../../assets/images/User.svg';
import coding from '../../../assets/images/coding.svg';
import newsletter from '../../../assets/images/newsletter.svg';
import startup from '../../../assets/images/startup.svg';

const SectionTwo = (props) => {

  return (
    <div className="landing-page-section-2">
      <div className="row-container">
        <div className="left">
          <div className="landing-page-section-2-image-container">
            <img src={user} alt="user" className="image" />
          </div>
          <div className="text-img-separator"></div>
          <h2 className="title">12,000 Users</h2>
          <div className="text">
            <p>
              Number of people are making way
              towards their chosen dream, be the
              part of growing community.
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
             Collaborated with colleges across India to help students.
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
           Number of available opportunities to help students in the journey of becoming their best version.
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
              Access unlimited resources on
              your technologies.  Learn from the best and 
              give the best.
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
            Curated Learning Roadmaps to help you get started in your technology.
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
             Subscribe for curated newsletter weekly and stay updated with latest 
             developments and opportunities in your domain. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
