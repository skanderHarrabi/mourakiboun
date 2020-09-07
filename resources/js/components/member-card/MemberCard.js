import React from 'react';
import "./member-card.scss";
import adminUserImg from "../../assets/img/adminuser.jpg";
import LazyImg from "../lazy-img/LazyImg";
import EllipsisText from "react-ellipsis-text";

const MemberCard = props => {
    return (
        <div className={"member-card"}>
            <div className="img-container">
                <LazyImg src={("storage/"+ props.staff.image)} thumb={("storage/"+ props.staff.image)} alt={props.staff.name}/>
            </div>
            <div className="text-description">
                <h2 className={"blue-txt"}>{props.staff.name}</h2>
                <p  className={"blue-txt"}>
                    <EllipsisText text={props.staff.function} length={15} />
                </p>
            </div>
        </div>
    );
};

export default MemberCard;
