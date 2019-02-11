import React from 'react';
import './SectionOne.css';
import back from '../../../assets/images/back.png';
// import blackLeft from '../../../assets/images/landing_left.svg';
// import blackRight from '../../../assets/images/landing_right.svg';
import { Link } from 'react-router-dom';

const SectionOne = (props) => {
  console.log(window.innerWidth);
  // eslint-disable-next-line
  const isDesktop = window.innerWidth > 960 ? true : false;

  return (
    <>
      <div id="special-container">
        <h1>Resources for Students</h1>
        <p>Explore the ultimate collection</p>
        <div><Link to="/home">Explore</Link></div>
      </div>
      <img src={back} alt="" className="background-svg-1" onLoad={() => props.stopLoading()} />
      {/* <img src={blackLeft} alt="" className="background-svg-10" onLoad={() => props.stopLoading()} />
      <img src={blackRight} alt="" className="background-svg-20" onLoad={() => props.stopLoading()} /> */}
      {/* {isDesktop &&
        <div className="scroll-div">
          <button className="scroll-btn" title="Scroll Down"><i className="down"></i></button>
        </div>} */}
    </>
  );
}

export default SectionOne;