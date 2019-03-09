import React from 'react';
import './SectionThree.css';
import feedingTrends from './../../../assets/images/feedingt.jpg'
import bitsdroid from './../../../assets/images/fb.jpg'
// import c1 from './../../../assets/images/bitsdroid.png'
// import c2 from './../../../assets/images/9l.png'

const SectionThree = (props) => {

  return (
    <div className="padding-container">
      <div className="featured-title"><h3>Featured</h3></div>
      <div className="features">

        {/* <div className="feature-item">  <a href="http://bit.ly/2ECaYIS" target="__" > Feeding Trends</a> </div> */}

        <div className="feature-item-card">
            <a href="http://bit.ly/2SPTZpb" target="__">
              <img src={feedingTrends} alt="FeedingTrend"/>
            </a>   
            <span  className="feature-heading-container"> 
              <p>FeedingTrends</p>
            </span> 
        </div>  

        <div className="feature-item-card">
            <a href="http://bit.ly/2ECaYIS" target="__">
              <img src={bitsdroid} alt="BitsDroid"/>
            </a>   
            <span  className="feature-heading-container"> 
              <p>Bitsdroid</p>
            </span>         
        </div>  

        <div className="feature-item-card">
           <a href="http://bit.ly/2RArhMY" target="__">
              <img src={bitsdroid} alt="9Learners"/>
            </a>    
            <span  className="feature-heading-container"> 
              <p>9Learners</p>
            </span>         
        </div>  



        {/* <div className="feature-item">  <a href="http://bit.ly/2ECaYIS" target="__" > Bitsdroid</a> </div> */}

      </div>
    </div>
  );
}

export default SectionThree;