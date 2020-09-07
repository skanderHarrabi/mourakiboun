import React, { useEffect, useState, useRef } from "react";
import slideImgHome from "../../assets/img/slide-home-pic.jpg";
import thumbSlideImgHome from "../../assets/img/small-slide-home-pic.jpg";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home-slider.scss";
import Slider from "react-slick";
import SlideItem from "./SlideItem";
import { Link } from "react-router-dom";
import ArrowYellowRight from "../svg/ArrowYellowRight";
import { Progress, Icon } from "antd";
import LazyImg from "../lazy-img/LazyImg";
import EllipsisText from "react-ellipsis-text";
const HomeSlider = props => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    fade: false,
    vertical: false,
    autoplay: false,
    mobileFirst: true,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    cssEase: "linear"
  };

  let [progress, setProgress] = useState(0);
  let [timer, setTimer] = useState(0);
  let [paused, setPaused] = useState(false);

  const sliderRef = useRef();

  useInterval(() => {
    if (progress < 100) {
    if (!paused) {
      setProgress(progress + 0.4);
      setTimer(progress / 4 + timer);
    }
  } else {
    setProgress(0);
  }

  if (progress >= 99) {
    if (!paused) {
      sliderRef.current.slickNext();
    }
  }
}, 10);
  const goNext = ()=>{
    setProgress(0);
    sliderRef.current.slickNext();
  };

  let act =(
    <div className="thumb-preview">
    {props.actualities.map((actualitie,index) =>{
        return <div key={actualitie.id} className={"item-thumb"}>
      <div className="item-card">
      <h5>{index+1<10?"0"+(index+1):(index+1)}</h5>
      <p>
      <EllipsisText text={actualitie.content} length={30} />
  </p>
  </div>
  </div>
})}
</div>
);

  return (
    <div className="home-slider">
    <div className="img-container">
    <LazyImg src={slideImgHome} thumb={thumbSlideImgHome} alt={"Mourakiboun Accueil"}/>
  </div>
  <div className="flex-slider">
    <div className="max-width-container">
    <div className="flex-row">
    <div
  className="left"
  onTouchStart={() => setPaused(true)}
  onTouchCancel={() => setPaused(false)}
  onTouchEnd={()=>setPaused(false)}
  onMouseLeave={() => setPaused(false)}
  onMouseEnter={() => setPaused(true)}
>
  {
    props.actualities.length > 0 ? <Slider {...settings} ref={sliderRef}>

    {props.actualities.map((actualitie,index) => {
        return <SlideItem key={actualitie.id} actualitie={actualitie} index={index}/>
  })}

  </Slider> : null
  }
</div>
  <div className="right">
    <div className={"title-itm"}>Dernières actualités</div>
  {act}
</div>
  </div>
  </div>
  </div>
  <div className="progress-container-custom" onClick={goNext}>
    <Progress
  showInfo={false}
  strokeColor={"#FEDC00"}
  strokeWidth={3}
  type="circle"
  percent={progress}
  width={65}
  />
  <div className="icon-container">
    <Icon type="caret-right" />
    </div>
    </div>
    </div>
);
};
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
}, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
    savedCallback.current();
  }
  if (delay !== null) {
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }
}, [delay]);
}
export default HomeSlider;
