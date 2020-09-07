import React from "react";
import "./activity-card.scss";
import pc1 from "../../assets/img/ac1.jpg";
import LazyImg from "../lazy-img/LazyImg";
import {Link} from "react-router-dom";

const ActivityCard = props => {
  return (
    <Link to={"/activities/"+props.activite.id} className={"activity-card"}>
      <div className="img-container">
        <LazyImg src={("storage/"+ props.activite.image)} thumb={("storage/"+ props.activite.image)} alt={props.activite.title} />
      </div>
      <div className="content">
        <h1 className={"blue-txt"}>{(props.index+1)>=10?(props.index+1):"0"+(props.index+1)}</h1>
        <h3>{props.activite.title}</h3>
      </div>
    </Link>
  );
};

export default ActivityCard;
