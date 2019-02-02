import React from 'react';
import './SectionThree.css';
import c1 from './../../../assets/images/bitsdroid.png'
import c2 from './../../../assets/images/9l.png'

const SectionThree = (props) => {

  return (
    <div className="padding-container">
      <div className="featured"><h3>Featured</h3></div>
      <div className="features">
        <div><img className="company" src={c1} alt="Bitsdroid"/> </div>
        
        <div><img className="company" src={c2} alt="9Learners"/> </div>

      </div>
    </div>
  );
}

export default SectionThree;