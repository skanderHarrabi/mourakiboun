import * as React from 'react';
import Slider from "react-slick";
import "./slider-three.scss";


export default function SliderThree(props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    draggable: true,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-three" style={{width:"100%"}}>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </div>
  );
}
