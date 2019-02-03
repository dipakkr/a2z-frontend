import React from 'react';
import './Gallery.css';
import img1 from './../../assets/images/gallery/0.jpeg'
import img2 from './../../assets/images/gallery/1.jpeg'
import img3 from './../../assets/images/gallery/2.jpeg'
import img4 from './../../assets/images/gallery/3.jpeg'
import img5 from './../../assets/images/gallery/4.jpeg'
import img6 from './../../assets/images/gallery/5.jpeg'
import img7 from './../../assets/images/gallery/6.jpeg'
import img8 from './../../assets/images/gallery/7.jpeg'

const data = [
  {
    image : img1,
    text : 'Greater Noida'
   
  },
  {
    image : img2,
    text : 'Greater Noida'
   
  },
  {
    image : img3,
    text : 'Greater Noida'
   
  },
  {
    image : img4,
    text : 'Jaipur'
   
  },
  {
    image : img5,
    text : 'Delhi'
   
  },
  {
    image : img6,
    text : 'Greater Noida'
   
  },
  {
    image : img7,
    text : 'Kolhapur'
   
  },
  {
    image : img8,
    text : 'Kolhapur'
   
  }
];

class Carousel extends React.Component {

  state = {
    startImageIndex: 0,
    endImageIndex: window.innerWidth > 460 ? 3 : 1,
  }

  previousSlide = () => {
    const { startImageIndex, endImageIndex } = this.state;
    if (startImageIndex !== 0) {
      this.setState({
        startImageIndex: startImageIndex - 1,
        endImageIndex: endImageIndex - 1
      })
    }
  }

  nextSlide = () => {
    const lastIndex = data.length;
    const { startImageIndex, endImageIndex } = this.state;
    if (lastIndex !== endImageIndex) {
      this.setState({
        startImageIndex: startImageIndex + 1,
        endImageIndex: endImageIndex + 1
      })
    }
  }

  render() {
    const { startImageIndex, endImageIndex } = this.state;
    const showData = data.slice(startImageIndex, endImageIndex)
    return (
      <div className="carousel">
        <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#8249;" />
        <ImageSlide data={showData} />
        <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#8250;" />
      </div>
    );
  }
}


const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={`slide-arrow slide-${direction}`}
    onClick={clickFunction}>
    {glyph}
  </div>
);

const ImageSlide = ({ data }) => {

  return (
    <div className="image-slide">
      {
        data.map((data) => {
          return (
            <div className="slide-content" key={data.text}>
              <img src={data.image} alt="user-testimonials" />
              <p className="testimony">{data.text}</p>
              <p className="testimony-author">-{data.author}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default Carousel;