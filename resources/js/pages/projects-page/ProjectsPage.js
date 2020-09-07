import React, {useEffect, useState} from "react";
import "./projects-page.scss";
import ImgPageHeader from "../../components/img-page-header/ImgPageHeader";
import imgHeaderProject from "../../assets/img/projectpic.jpg";
import thumbimgHeaderProject from "../../assets/img/thumbprojectpic.jpg";
import picVille from "../../assets/img/picville.jpg";
import LazyImg from "../../components/lazy-img/LazyImg";
import VoteIcon from "../../components/svg/VoteIcon";
import ActivitiesListBlock from "../../components/activities-list-block/ActivitiesListBlock";
import WatcherBlock from "../../components/watcher-block/WatcherBlock";
import NewsLettreBlock from "../../components/newsletter-block/NewsLettreBlock";
import axiosInstance from "../../config/axios-instance";


const ProjectsPage = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [activitesData, setActivitesData] = useState([]);

  useEffect(() => {
    let url = "projects";
    axiosInstance({
      method: "get",
      url: url
    }).then(res => {
      setProjectsData(res.data);
    });
  }, []);
  useEffect(() => {
    let url = "activites";
    axiosInstance({
      method: "get",
      url: url
    }).then(res => {
      setActivitesData(res.data);
    });
  }, []);

  let proj = (
    projectsData.map((p, index) =>
      <div key={p.id}>
        <div className={"marger-top"}/>
        <div className="content-block-full-with">
          <div className="content-container no-padding-top">
            <div className={`flex-project-block ${index % 2 != 0 ? "reversed" : ""}`}>
              <div className="img-container">
                <LazyImg src={("storage/" + p.image)} thumb={("storage/" + p.image)} alt={"Project Mourakiboun"}/>
              </div>
              <div className="project-details">
                <h1 className={"blue-txt"}>Le projet Mourakiboun</h1>
                <p className="number">{(index + 1) >= 10 ? (index + 1) : "0" + (index + 1)}</p>
                <h1 className={"blue-txt"}>{p.name}</h1>
                <p>{p.content}</p>
                <div className="icon-container">
                  <LazyImg src={("storage/" + p.icon)} thumb={("storage/" + p.icon)}
                           alt={"icon"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );


  return (
    <div className={"projects-page"}>
      <ImgPageHeader
        img={imgHeaderProject}
        alt={"header mourakiboun media"}
        title={"Le Projet Mourakiboun"}
        thumb={thumbimgHeaderProject}
        description={
          ""
        }
      />

      <div className="content-block-full-with">
        <div className="content-container no-padding-top">
          <div className="flex-description-block">
            <div className="left">
              <div className="img-container">
                <LazyImg
                  src={picVille}
                  thumb={picVille}
                  alt={"Mourakiboun Pojects"}
                />
              </div>
            </div>
            <div className="right">
              <p>
                Sed luctus varius lorem, iaculis tincidunt metus hendrerit eget.
                Etiam aliquet lorem vitae velit mattis pharetra. Nam vel
                faucibus massa. Nunc porta diam augue, et sodales ipsum congue
                id. Nulla quis tempus quam, ac iaculis elit. Mauris sit amet
                congue nunc. Sed id felis rhoncus ex sollicitudin tempor id a
                est.
              </p>
              <p> Duis magna enim, varius a accumsan id, maximus a risus.</p>
              <h3 className={"signature"}>Mohamed Marzouk</h3>
            </div>
          </div>
        </div>
      </div>

      {proj}

      <div className={"marger-top"}/>
      <ActivitiesListBlock activites={activitesData}/>
      <div className={"marger-top"}/>
      <WatcherBlock/>
      <NewsLettreBlock/>
    </div>
  );
};

export default ProjectsPage;
