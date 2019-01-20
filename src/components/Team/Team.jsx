import React from 'react';
import './Team.css';
import image from './../team1.jpg';

const Team = (props) => {
    return (
        <div className="about-page-container">
            <div className="about-container">

                 <div class="blog-container blog-background"><h1 class="blog-h1">Our Team </h1></div>


            </div>
            <div className="row">
        <div className="column">
          <div className="card">
            <img src={image} alt="Jane" style={{width: '100%'}} />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO &amp; Founder</p>

            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={image} alt="Mike" style={{width: '100%'}} />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>

            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={image} alt="John" style={{width: '100%'}} />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>

            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={image} alt="Jane" style={{width: '100%'}} />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO &amp; Founder</p>

            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={image} alt="Jane" style={{width: '100%'}} />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO &amp; Founder</p>

            </div>
          </div>
        </div>






      </div>

        </div>
    );
}

export default Team;
