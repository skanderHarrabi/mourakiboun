import React from "react";
import "./news-card.scss";
import flag from "../../assets/img/flag.png";
import {Link} from "react-router-dom";

const NewsCard = props => {
  return (
    <Link to={"/news/"+ props.actualitie.id} className={"news-card"}>
      <div className="img-container">
        <img src={("storage/"+ props.actualitie.file)} alt={props.actualitie.title} />
      </div>
     <div className="content">
         <h2 className={"title blue-txt"}>{props.actualitie.title}</h2>
         <p className={"description blue-txt"}>
             {props.actualitie.content}
         </p>
         <p className={"date blue-txt"}>{new Date(props.actualitie.created_at).toDateString()}</p>
     </div>
    </Link>
  );
};

export default NewsCard;
