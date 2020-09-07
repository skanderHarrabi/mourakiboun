import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home-slider.scss";
import { Link } from "react-router-dom";
import ArrowYellowRight from "../svg/ArrowYellowRight";
import EllipsisText from "react-ellipsis-text";

const SlideItem = props => {
  return (
      <div className={"slide-item"}>
          <div className="counter-slide">
              0{props.index+1}<span>/03</span>
          </div>
          <h1> {props.actualitie.title} </h1>
          <h3>
              <EllipsisText text={props.actualitie.content} length={30} />
          </h3>
          <p className={"date"}>{new Date(props.actualitie.created_at).toDateString()}</p>
          <Link className={"go-to-link"} to={"/elections"}>
              <ArrowYellowRight />
              <span>Découvrez</span>
          </Link>
      </div>
  );
};
export default SlideItem;
