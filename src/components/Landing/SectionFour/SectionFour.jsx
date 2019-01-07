import React from 'react';
import './SectionFour.css';
import Carousel from '../../Carousel/Carousel';

const SectionFour = (props) => {

  return (
    <div className="padding-container">
      <div className="user-thoughts"><h3>User Thoughts</h3></div>
      <Carousel />
    </div>
  );
}

export default SectionFour;