import React from 'react';
import './Carousel.css';

const data = [
  {
    url: "https://via.placeholder.com/150",
    text: `" I really got everything what
          I was looking for Thankyou
          frontbench . "`,
    author: "Anonymous"
  },
  {
    url: "https://via.placeholder.com/150",
    text: `" I really got everything what
            This is the 2nd one."`,
    author: "Anonymous"
  },
  {
    url: "https://via.placeholder.com/150",
    text: `" I really got everything what
            This is the 3rd one. "`,
    author: "Anonymous"
  },
  {
    url: "https://via.placeholder.com/150",
    text: `" This is the 4th one bitch"`,
    author: "Anonymous"
  },
];

class Carousel extends React.Component {

  state = {
    startImageIndex: 0,
    endImageIndex: 3,
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
    console.log('start then end');
    console.log(startImageIndex);
    console.log(endImageIndex);
    const showData = data.slice(startImageIndex, endImageIndex)
    return (
      <div className="carousel">
        <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
        <ImageSlide data={showData} />
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

const ImageSlide = ({ data }) => {

  return (
    <div className="image-slide">
      {
        data.map((data) => {
          return (
            <div className="slide-content" key={data.text}>
              <img src={data.url} alt="user-testimonials" />
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