import React from 'react';
import './SectionTwo.css';
import contributor from '../../../assets/images/Contributor.png';
import event from '../../../assets/images/EventImage.png';
import user from '../../../assets/images/User.png';
import coding from '../../../assets/images/coding.png';
import meetups from '../../../assets/images/meetups.png';
import startup from '../../../assets/images/startup.png';

const SectionTwo = (props) => {

  return (
    <>
      <div className="row-container">
        <div className="left">
          <div className="image">
            <img src={user} alt="user" className="" />
          </div>
          <h2 className="title">2K Users</h2>
          <div className="text">
            <p>
              Number of people are making way
              towards their chosen dream , be the
              part of amazing family.
            </p>
          </div>
        </div>
        <div className="center">
          <div className="image">
            <img src={contributor} alt="contributor" className="" />
          </div>
          <h2 className="title">1K Contributors </h2>
          <div className="text">
            <p>
              People from all over the world are
              contributing. Make the best out of
              their contribution.
           </p>
          </div>
        </div>
        <div className="right">
          <div className="image">
            <img src={event} alt="event" className="" />
          </div>
          <h2 className="title">100s of Events </h2>
          <div className="text">
            <p>
              Number of events are added daily.
              Choose events according to your
              intrest and domain.
            </p>
          </div>
        </div>
      </div>
      <div className="row-container">
        <div className="left">
          <div className="image">
            <img src={coding} alt="user" className="" />
          </div>
          <h2 className="title">Unlimited coding tech</h2>
          <div className="text">
            <p>
              Access unlimited resources on
              coding technologies. Learn from
              the best and give the best.
            </p>
          </div>
        </div>
        <div className="center">
          <div className="image">
            <img src={startup} alt="contributor" className="" />
          </div>
          <h2 className="title">Startup Programs </h2>
          <div className="text">
            <p>
              Learn from the startup and grow
              your own ideas.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="image">
            <img src={meetups} alt="event" className="" />
          </div>
          <h2 className="title">Various Meetups </h2>
          <div className="text">
            <p>
              Meet with people from different
              domain and see their work and
              connect with their thoughts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;