import React from "react";
import "./declaration-card.scss";
import LazyImg from "../lazy-img/LazyImg";
import pic from "../../assets/img/mour.jpg";
import {Link} from "react-router-dom";
const DeclarationCard = props => {
  return (
    <Link to={"/declarations/"+props.declaration.id} className={"declaration-card"}>
      <div className="left">
          <div className="img-container">
              <LazyImg src={("storage/"+ props.declaration.image)} thumb={("storage/"+ props.declaration.image)} alt={"declartion thumb"}/>
          </div>
      </div>
        <div className="right">
            <p className={"date"}>{props.declaration.created_at.split(" ")[0]}</p>
            <h3>{props.declaration.title}</h3>
            <p>
                {props.declaration.content}
            </p>
        </div>
    </Link>
  );
};

export default DeclarationCard;
