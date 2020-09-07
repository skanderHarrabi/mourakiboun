import React, {useEffect, useState} from "react";
import "./activity-detail-page.scss";
import ImgPageHeader from "../../components/img-page-header/ImgPageHeader";
import imgHeaderProject from "../../assets/img/projectpic.jpg";
import thumbimgHeaderProject from "../../assets/img/thumbprojectpic.jpg";
import axiosInstance from "../../config/axios-instance";

const ActivityDetailsPage = props => {
    const [activityData, setActivityData] = useState([]);
    useEffect(() => {
        console.log(props.match.params.id);
        let url ="activity/" + props.match.params.id;
        axiosInstance({
            method: "get",
            url: url
        }).then(res =>{
            console.log(res);
            setActivityData(res.data);
        }).catch(err=>{
            setActivityData(null);
        });
    }, []);
  return (
    <div className={"activity-details-page"}>
      <ImgPageHeader
        img={imgHeaderProject}
        alt={activityData!=null?activityData.title:''}
        title={activityData!=null?activityData.title:"No Activity with this ID"}
        thumb={thumbimgHeaderProject}
        description={activityData!=null?activityData.description:""}
      />
      <div className={"marger-top"} />

      <div className="content-block-full-with ">
        <div className="content-container">
          <h1 className={"blue-txt"}>{activityData!=null?activityData.title:''}</h1>
          <p className={"txt-description"}>
              {activityData!=null?activityData.description:""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailsPage;
