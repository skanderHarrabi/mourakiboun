import React from 'react';
import "./project-card.scss";
import ArrowRight from "../svg/ArrowRight";
import {Link} from "react-router-dom";
import EllipsisText from "react-ellipsis-text";

const ProjectCard = props => {
    return (
        <div  className={"project-card"}>
            <p className={"number"}>{props.project.created_at.getMonth}</p>
            <h1>{props.project.name}</h1>
            <p className={"blue-txt"}>
                <EllipsisText text={props.project.content} length={80} />
            </p>
            <Link to={"/projects/"+props.project.id} > <ArrowRight/></Link>
        </div>
    );
};

export default ProjectCard;
