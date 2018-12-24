import React from 'react';
import './SectionOne.css';
import back from '../../../assets/images/back.png';
//import blackLeft from '../../../assets/images/svg1-small.svg';
//import blackRight from '../../../assets/images/Svg2-large.svg';
import { Link } from 'react-router-dom';

const SectionOne = (props) => {

  return (
    <>
      <div id="special-container">
        <h1>Resources for Students</h1>
        <p>Explore the ultimate collection</p>
        <div><Link to="/home">Get Started</Link></div>
      </div>
      <img src={back} alt="" className="background-svg-1" onLoad={() => props.stopLoading()} />
      {/*<img src={blackLeft} alt="" className="background-svg-10" onLoad={() => props.stopLoading()} />
      <img src={blackRight} alt="" className="background-svg-20" onLoad={() => props.stopLoading()} />*/}
      <div className="scroll-div">
        <button className="scroll-btn" title="Click to stay updated"><i className="down"></i></button>
      </div>
    </>
  );
}

export default SectionOne;