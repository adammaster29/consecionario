import React from "react";
import Slider from "react-slick";

const images = [
  "./img/carro1.jpg",
  "./img/carro2.jpg",
  "./img/carro3.jpg",
];

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Slider  {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Slide ${index + 1}`} style={{ width: "100% " }} />
        </div>
      ))}
    </Slider>
  );
};

export default SimpleCarousel;
