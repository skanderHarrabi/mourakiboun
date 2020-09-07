import React from "react";
import "./repport-card.scss";
import {Link} from "react-router-dom";
import ArrowRight from "../svg/ArrowRight";

const RepportCard = props => {
  return (
    <div  className={"repport-card"}>
      <h1 className={"big-text-lg"}>{props.rapport.date2}</h1>
        <div className="small-divider"></div>
      <p className={"white-txt"}>
          {props.rapport.content}
      </p>
        <Link to={"/repports/"+props.rapport.id}><ArrowRight/><span>Découvrez</span></Link>
    </div>
  );
};

export default RepportCard;
