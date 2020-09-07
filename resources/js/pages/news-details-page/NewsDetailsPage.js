import React, {useEffect, useState} from 'react';
import "./news-details-page.scss";
import ImgPageHeader from "../../components/img-page-header/ImgPageHeader";
import imgHeaderProject from "../../assets/img/projectpic.jpg";
import thumbimgHeaderProject from "../../assets/img/thumbprojectpic.jpg";
import axiosInstance from "../../config/axios-instance";

const NewsDetailsPage = props => {
    const [actualiteData, setactualiteData] = useState([]);

    useEffect(() => {
        console.log(props.match.params.id);
        let url ="actualite/" + props.match.params.id;
        axiosInstance({
            method: "get",
            url: url
        }).then(res =>{
            console.log(res);
            setactualiteData(res.data);
        }).catch(err=>{
            setactualiteData(null);
        });
    }, []);
    return (
        <div className={"news-details-page"}>

            <ImgPageHeader
                img={imgHeaderProject}
                alt={actualiteData!=null?actualiteData.title:""}
                title={actualiteData!=null?actualiteData.title:"No News with this ID"}
                thumb={thumbimgHeaderProject}
                description={actualiteData!=null?actualiteData.content:""}
                />


            <div className={"marger-top"} />

            <div className="content-block-full-with ">
                <div className="content-container">
                    <h1 className={'blue-txt'}>{actualiteData!=null?actualiteData.title:" "}</h1>
                    <p className={'txt-description'}>
                        {actualiteData!=null?actualiteData.content:""}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;
