import React, {useEffect, useState} from "react";
import "./media-page.scss";
import ImgPageHeader from "../../components/img-page-header/ImgPageHeader";
import imgHeaderMedia from "../../assets/img/media-header.jpg";
import thumbimgHeaderMedia from "../../assets/img/thumb-media-header.jpg";
import PhotosLibrary from "../../components/photos-library/PhotosLibrary";
import VideoLibrary from "../../components/video-library/VideoLibrary";
import DocumentsListBlock from "../../components/documents-list-block/DocumentsListBlock";
import DeclarationsListBlock from "../../components/declarations-list-block/DeclarationsListBlock";
import WatcherBlock from "../../components/watcher-block/WatcherBlock";
import NewsLettreBlock from "../../components/newsletter-block/NewsLettreBlock";
import {Helmet} from "react-helmet";
import axiosInstance from "../../config/axios-instance";
import LibraryEelection from "../../components/library-election/ListTopNews";


const MediaPage = () => {
  const [declarationData, setDeclarationData] = useState([]);
  const [vidiosData, setvidiosData] = useState([]);
  const [publicationData, setPublicationData] = useState([]);
  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    let url = "declarations";
    axiosInstance({
      method: "get",
      url: url
    }).then(res => {
      setDeclarationData(res.data);
    });
    url = "publications";
    axiosInstance({
      method: "get",
      url: url
    }).then(res => {
      setPublicationData(res.data);
    });
    url = "photos";
    axiosInstance({
      method: "get",
      url: url
    }).then(res => {
      setPhotosData(res.data);
    });
  }, []);

  useEffect(() => {
    let url = "videos";
    axiosInstance({
      method: "get",
      url: url
    }).then(res => {
      setvidiosData(res.data);
    });
  }, []);


  return (
    <div className={"media-page"}>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Mourakiboun | Media</title>
        <link rel="canonical" href="http://mysite.com/example"/>
      </Helmet>
      <ImgPageHeader
        img={imgHeaderMedia}
        alt={"header mourakiboun media"}
        title={"Média"}
        thumb={thumbimgHeaderMedia}
        description={
          ""
        }
      />
      <div className="content-block-full-with ">
        <div className="content-container">
          <div className="centered-block">
            <div className="nav-elements">
              <a href="#biblio-id">
                Bibilio électorale
              </a>
              <a href="#photos-id">
                Photos
              </a>
              <a href="#videos-id">
                Vidéos
              </a>
              <a href="#publications-id">
                Publications
              </a>
              <a href="#declaration-id">
                Déclarations
              </a>

            </div>
          </div>
        </div>
      </div>
      <div className="content-container">
      <LibraryEelection/>
      </div>
      <PhotosLibrary photos={photosData}/>
      <VideoLibrary vidios={vidiosData}/>
      <div className="marger-top"/>
      <DocumentsListBlock publications={publicationData}/>
      <DeclarationsListBlock declarations={declarationData}/>
      <WatcherBlock/>
      <NewsLettreBlock/>
    </div>
  );
};

export default MediaPage;
