import React from "react";
import "./list-top-projects.scss";
import mourJpg from "../../assets/img/mour.jpg";
import ProjectCard from "../project-card/ProjectCard";
import LazyImg from "../lazy-img/LazyImg";
import RepportCard from "../repport-card/RepportCard";
const ListTopProjects = props => {

  return (
    <div className={"list-top-projects"}>
      <h1>Projets Mourakiboun</h1>

      <div className="grid-list list-projects">
        <div className="img-container">
            <LazyImg src={mourJpg} thumb={mourJpg} alt={"mourakiboun working"}/>
        </div>
  {props.projects.map(project => {
    return <ProjectCard key={project.id} project={project}/>
  })}
      </div>
    </div>
  );
};

export default ListTopProjects;
