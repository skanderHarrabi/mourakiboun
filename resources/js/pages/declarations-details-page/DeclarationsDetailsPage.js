import React, {useEffect, useState} from 'react';
import "./declarations-details-page.scss";
import ImgPageHeader from "../../components/img-page-header/ImgPageHeader";
import imgHeaderProject from "../../assets/img/projectpic.jpg";
import thumbimgHeaderProject from "../../assets/img/thumbprojectpic.jpg";
import axiosInstance from "../../config/axios-instance";

const DeclarationsDetailsPage = props => {
    const [declarationData, setDeclarationData] = useState([]);
    useEffect(() => {
        console.log(props.match.params.id);
        let url ="declaration/" + props.match.params.id;
        axiosInstance({
            method: "get",
            url: url
        }).then(res =>{
            console.log(res);
            setDeclarationData(res.data);
        }).catch(err=>{
            setDeclarationData(null);
        });
    }, []);

    return (
        <div className={'declarations-details-page'}>
            <ImgPageHeader
                img={imgHeaderProject}
                alt={declarationData!=null?declarationData.title:''}
                title={declarationData!=null?declarationData.title:"No Declaration with this ID"}
                thumb={thumbimgHeaderProject}
                description={declarationData!=null?declarationData.content:""}
            />
            <div className={"marger-top"} />

            <div className="content-block-full-with ">
                <div className="content-container">
                    <h1 className={"blue-txt"}>{declarationData!=null?declarationData.title:''}</h1>
                    <p className={"txt-description"}>
                        {declarationData!=null?declarationData.content:""}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DeclarationsDetailsPage;
