import React from 'react';
import './Carousel.css';

const imgUrls = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
];

class Carousel extends React.Component {

  state = {
    currentImageIndex: 0
  }

  previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
        <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
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

const ImageSlide = ({ url }) => {

  return (
    <div className="image-slide">
      <div className="slide-content">
        <img src={url} alt="user-testimonials" />
        <p>" I really got everything what
            I was looking for Thankyou
            frontbench . "
        </p>
        <p>-Anonymous</p>
      </div>
      <div className="slide-content">
        <img src={url} alt="user-testimonials" />
        <p>" I really got everything what
            I was looking for Thankyou
            frontbench . "
        </p>
        <p>-Anonymous</p>
      </div>
      <div className="slide-content">
        <img src={url} alt="user-testimonials" />
        <p>" I really got everything what
            I was looking for Thankyou
            frontbench . "
        </p>
        <p>-Anonymous</p>
      </div>
    </div>
  );
}

export default Carousel;