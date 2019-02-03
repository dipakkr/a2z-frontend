import React from 'react';
import './SectionFour.css';
import Gallery from '../../GalleryCarousel/Gallery';

const SectionFour = (props) => {

  return (
    <div className="padding-container">
      <div className="user-thoughts"><h3>Gallery</h3></div>
      <Gallery />
    </div>
  );
}

export default SectionFour;