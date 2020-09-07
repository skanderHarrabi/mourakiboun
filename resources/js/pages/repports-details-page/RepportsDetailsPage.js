import React, {useEffect, useState} from "react";
import ImgPageHeader from "../../components/img-page-header/ImgPageHeader";
import imgHeaderProject from "../../assets/img/projectpic.jpg";
import thumbimgHeaderProject from "../../assets/img/thumbprojectpic.jpg";
import "./repports-details-page.scss";
import axiosInstance from "../../config/axios-instance";

const RepportsDetailsPage = props => {
    const [rapportData, setRapportData] = useState([]);

    useEffect(() => {
        console.log(props.match.params.id);
        let url ="rapport/" + props.match.params.id;
        axiosInstance({
            method: "get",
            url: url
        }).then(res =>{
            console.log(res);
            setRapportData(res.data);
        }).catch(err => {
            setRapportData(null);
        });
    }, []);
  return (
    <div className={"repports-details-page"}>
      <ImgPageHeader
        img={imgHeaderProject}
        alt={rapportData!=null?rapportData.name:""}
        title={rapportData!=null?new Date(rapportData.created_at).getFullYear():"No Rapport with this Id"}
        thumb={thumbimgHeaderProject}
        description={rapportData!=null?rapportData.content:""}
      />
      <div className={"marger-top"} />

      <div className="content-block-full-with ">
        <div className="content-container">
          <h1 className={"blue-txt"}>{rapportData!=null?rapportData.name:""}</h1>
          <p className={"txt-description"}>
              {rapportData!=null?rapportData.content:""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepportsDetailsPage;
