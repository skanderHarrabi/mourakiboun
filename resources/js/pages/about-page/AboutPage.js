import React, {useEffect, useState} from "react";
import "./about-page.scss";
import ProcessionTabsBlock from "../../components/procession-tabs-block/processionTabsBlock";
import ListTopProjects from "../../components/list-top-projects/ListTopProject";
import WatcherBlock from "../../components/watcher-block/WatcherBlock";
import NewsLettreBlock from "../../components/newsletter-block/NewsLettreBlock";
import MembersBlock from "../../components/members-block/MembersBlock";
import {Helmet} from "react-helmet";
import axiosInstance from "../../config/axios-instance";
import Founders from "../../components/founders/Founders";

const AboutPage = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [staffAdministratifData, setStaffAdministratifData] = useState([]);
    const [staffExecutifData, setStaffExecutifData] = useState([]);
    const [ProcessionData, setProcessionDataData] = useState([]);
    useEffect(() => {
        let url ="projects";
        axiosInstance({
            method: "get",
            url: url
        }).then(res =>{
            setProjectsData(res.data);
        });
    }, []);
    useEffect(() => {
        let url ="staffAdministratif";
        axiosInstance({
            method: "get",
            url: url
        }).then(res =>{
            setStaffAdministratifData(res.data);
        });
    }, []);
    useEffect(() => {
        let url ="staffexecutif";
        axiosInstance({
            method: "get",
            url: url
        }).then(res =>{
            setStaffExecutifData(res.data);
        });
    }, []);
    useEffect(() => {
        let url ="processions";
        axiosInstance({
            method: "get",
            url: url
        }).then(res =>{
            setProcessionDataData(res.data);
        });
    }, []);
  return (
    <div className={"about-page"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mourakiboun | A propos</title>
        <link rel="canonical" href="http://Mourakiboun.org/about" />
      </Helmet>
        <div className="page-header">

           <div className="content-container">
               <h1>Qui sommes-nous</h1>
           </div>
        </div>
      <div className="yellow-bg">
        <div className="content-block-full-with">
          <div className="content-container">
            <div className="counters-list">
              <div className="counter-item">
                <div className="big-text blue-txt">1001</div>
                <p className={"mini-text"}>
                  bureaux de vote Observation statique
                </p>
              </div>
              <div className="counter-item">
                <div className="big-text blue-txt">900</div>
                <p className={"mini-text"}>
                  Superviseur et observateur pour observer les alentours des
                  bureaux de vote
                </p>
              </div>

              <div className="counter-item">
                <div className="big-text blue-txt">100</div>
                <p className={"mini-text"}>
                  Observateurs représentant l'équipe centrale
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-block-full-with">
        <div className="content-container">
          <ProcessionTabsBlock processions={ProcessionData}/>
        </div>
      </div>
      <MembersBlock staffAdministratif={staffAdministratifData} staffExecutif={staffExecutifData}/>
        <div className="content-block-full-with blue-bg">
            <div className="content-container">
                <ListTopProjects projects={projectsData} />
            </div>
        </div>
      <WatcherBlock />
      <NewsLettreBlock />
    </div>
  );
};

export default AboutPage;
