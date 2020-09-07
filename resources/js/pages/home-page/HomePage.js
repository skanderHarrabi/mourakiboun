
import React, {useEffect, useState} from "react";
import "./home-page.scss";
import {Helmet} from "react-helmet";
import electionFlag from "../../assets/img/election-flag.jpg";
import DownloadIcon from "../../components/svg/DownloadIcon";
import ListTopRepports from "../../components/list-top-repports/ListTopRepports";
import ListTopNews from "../../components/list-top-news/ListTopNews";
import ListTopProjects from "../../components/list-top-projects/ListTopProject";
import WatcherBlock from "../../components/watcher-block/WatcherBlock";
import NewsLettreBlock from "../../components/newsletter-block/NewsLettreBlock";
import HomeSlider from "../../components/home-slider/HomeSlider";
import LazyImg from "../../components/lazy-img/LazyImg";
import {useDispatch, useSelector} from "react-redux";
import {fetchRapports} from "../../actions/rapports-actions/actions";
import {fetchActualities} from "../../actions/actualites-actions/actions";
import axiosInstance from "../../config/axios-instance";

import "./home-page.scss";
import SliderThree from "../../components/slider-three/SliderThree";
const HomePage = () => {
    const dispatch = useDispatch();
    const rapports = useSelector(state => state.rapportsReducer.rapports);
    const actualities = useSelector(state => state.actualitesReducer.actualites);
    const [rapportsData, setRapportsData] = useState([]);
    const [actualitiesData, setActualitiesData] = useState([]);
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        dispatch(fetchRapports());
        dispatch(fetchActualities());
        let url ="projects";
        axiosInstance({
            method: "get",
            url: url
        }).then(res =>{
            setProjectsData(res.data);
        });
    }, []);

    useEffect(() => {
        setRapportsData(rapports);
    }, [rapports]);

    useEffect(() => {
        setActualitiesData(actualities);
    }, [actualities]);

  return (
    <div className="home-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mourakiboun | Accueil</title>
        <link rel="canonical" href="http://mourakiboun.tn" />
      </Helmet>
      <HomeSlider actualities={actualitiesData}/>

      <div className="content-block-full-with blue-bg">
        <div className="content-container">
          <div className="download-block-with-left-pic">
            <div className="left">
              <div className="img-container">
                <LazyImg src={electionFlag} thumb={electionFlag} alt={'élection mourakiboun tunisie'}/>
              </div>
            </div>
            <div className="right">
              <h1>Déclaration</h1>
              <p className={"white-txt"}>
                Phasellus faucibus orci sit amet est rutrum tempus. Mauris ac
                enim lectus. Proin tempor metus ut pretium aliquet. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
              <a className={"btn-link-outline"} href="/" target={"_blank"}>
                {" "}
                <span>Télécharger PDF</span>
                <DownloadIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content-block-full-with">
        <div className="content-container">
          <div className="column-flex">
            <div className={"marger-top"} />
            <h1 className={"blue-txt max-big-with-txt"}>A propos Mourakiboun</h1>
            <p className={"centered-text"}>
              Aujourd'hui nous sommes forts de près de 4000 observateurs, on ne
              s'arrêtera pas là, nous espérons continuer notre chemin et nous
              renforcer dans le domaine
            </p>
            <p className={"centered-text"}>
              MOURAKIBOUN est un réseau citoyen tunisien qui a formé 4000
              observateurs pour les élections de l'Assemblée Nationale
              Constituante du 23 octobre 2011.
            </p>
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
      <div className="content-block-full-with blue-bg">
        <div className="content-container">
          <div className={"marger-top"} />
          <ListTopRepports rapports={rapportsData}/>

        </div>
      </div>
      <div className="content-block-full-with ">
        <div className="content-container">
          <div className={"marger-top"} />
          <ListTopNews actualities={actualitiesData}/>
        </div>
      </div>
      <div className="content-block-full-with blue-bg">
        <div className="content-container">
          <div className={"marger-top"} />
            <ListTopProjects projects={projectsData} />
        </div>
      </div>
      <WatcherBlock/>
      <NewsLettreBlock/>
    </div>
  );
};

export default HomePage;
