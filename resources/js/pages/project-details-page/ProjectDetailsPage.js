import React, {useEffect, useState} from 'react';
import ImgPageHeader from "../../components/img-page-header/ImgPageHeader";
import imgHeaderProject from "../../assets/img/projectpic.jpg";
import thumbimgHeaderProject from "../../assets/img/thumbprojectpic.jpg";
import './project-details-page.scss';
import axiosInstance from "../../config/axios-instance";

const ProjectDetailsPage = props => {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        console.log(props.match.params.id);
        let url ="project/" + props.match.params.id;
        axiosInstance({
            method: "get",
            url: url
        }).then(res =>{
            console.log(res);
            setProjectData(res.data);
        }).catch(err => {
            setProjectData(null);
        });
    }, []);


    return (
        <div className={'project-details-page'}>
            <ImgPageHeader
                img={imgHeaderProject}
                alt={projectData!=null?projectData.name:""}
                title={projectData!=null?projectData.name:"No projects with this ID"}
                thumb={thumbimgHeaderProject}
                description={projectData!=null?projectData.content:""}
            />
            <div className={"marger-top"} />

            <div className="content-block-full-with ">
                <div className="content-container">
                    <h1 className={"blue-txt"}>Project</h1>
                    <p className={"txt-description"}>
                        {projectData!=null?projectData.content:""}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;
