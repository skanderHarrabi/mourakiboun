import React, {useEffect, useState} from "react";
import "./observations-page.scss";
import ImgPageHeader from "../../components/img-page-header/ImgPageHeader";
import imgHeaderOBS from "../../assets/img/obserheader.jpg";
import BigIconGray from "../../components/svg/BigIconLogGray";
import ArrowUp from "../../components/svg/ArrowUp";
import ArrowDown from "../../components/svg/ArrowDown";
import WatcherBlock from "../../components/watcher-block/WatcherBlock";
import NewsLettreBlock from "../../components/newsletter-block/NewsLettreBlock";
import {Helmet} from "react-helmet";
import axiosInstance from "../../config/axios-instance";
import PhotosLibrary from "../../components/photos-library/PhotosLibrary";
import DocumentsListBlock from "../../components/documents-list-block/DocumentsListBlock";
import {Dropdown, Icon, Menu} from "antd";

const ObservationsPage = () => {
    const [photosData, setPhotosData] = useState([]);
    const [publicationData, setPublicationData] = useState([]);

    useEffect(() => {
        let url ="photos";
        axiosInstance({
            method: "get",
            url: url
        }).then(res =>{
            console.log(res.data);
            setPhotosData(res.data);
        });
    }, []);
    useEffect(() => {
        let url ="publications";
        axiosInstance({
            method: "get",
            url: url
        }).then(res =>{
            console.log(res.data);
            setPublicationData(res.data);
        });
    }, []);

    return (
    <div className={"observations-page"}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Mourakiboun | Observation des élections</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      <ImgPageHeader
        img={imgHeaderOBS}
        alt={"header mourakiboun L'observation des élections"}
        title={""} //L'observation des élections 2019
        thumb={imgHeaderOBS}
        description={
          ""
        }
      />
      <div className="content-block-full-with ">
        <div className="content-container no-padding-top no-padding-bottom">
          <div className="container-yellow">
            <h2 className={"blue-txt"}>Année d'élection</h2>
            <h1 className={"blue-txt"}>2018 - 2019</h1>

              <div className="dropdown-marged">
                  <Dropdown placement={"bottomRight"} overlay={<Menu>
                      <Menu.Item>
                          <a target="_blank" rel="noopener noreferrer" href="#">
                              2019-2029
                          </a>
                      </Menu.Item>
                  </Menu>}>
                      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                           <Icon type="down" />
                      </a>
                  </Dropdown>
              </div>
          </div>
        </div>
      </div>
      <div className="content-block-full-with ">
        <div className="content-container no-padding-top no-padding-bottom no-margin-top no-margin-bottom">
          <div className="container-gray">
              <div className="svg-bg-container">
                  <BigIconGray/>
              </div>
            <div className="left">
              <h1 className={"white-txt"}>Élections municipales</h1>
              <h3 className={"white-txt"}>2018</h3>
            </div>
            <div className="right">
              <h1 className={"white-txt"}>Élections législatives</h1>
              <h3 className={"white-txt"}>2019</h3>
            </div>
          </div>
        </div>
      </div>

        <div className="content-block-full-with ">
            <div className="content-container no-padding-top no-margin-top">
                <div className="flex-list container-blue">
                   <div className="stat-card">
                       <h3>Nombre d'élus</h3>
                       <h1 className={"minimized-h1"}>2 Millions</h1>
                       <div className="percentage">
                          <ArrowUp/> 41% femmes
                       </div>
                       <div className="percentage">
                           <ArrowDown/> 59% Hommes
                       </div>
                   </div>
                    <div className="stat-card">
                        <h3>Taux de
                            participation</h3>
                        <h1>62%</h1>
                        <div className="percentage">
                            <ArrowUp/> 72% Tunis
                        </div>
                        <div className="percentage">
                            <ArrowDown/> 12% Gafsa
                        </div>
                    </div>
                    <div className="stat-card">
                        <h3>Résultats finale</h3>
                        <h1>30.7%</h1>
                        <div className="percentage">
                            <ArrowUp/>  1 Ennahdha
                        </div>
                        <div className="percentage">
                            <ArrowDown/> 2 Nidhaa Tounes
                        </div>
                    </div>
                    <div className="stat-card">
                        <h3>Abus juridique</h3>
                        <h1>2%</h1>
                        <div className="percentage">
                            <ArrowUp/> 0.5% Tunis
                        </div>
                        <div className="percentage">
                          <ArrowDown/>  0.2% Jendouba
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-block-full-with ">
            <div className="content-container no-padding-top no-margin-top">
                <div className={"marger-top"}/>
                <DocumentsListBlock publications={publicationData}/>
            </div>
        </div>
        <PhotosLibrary photos={photosData} />

        <div className={"marger-top"} />
        <WatcherBlock />
        <NewsLettreBlock />

    </div>
  );
};

export default ObservationsPage;
