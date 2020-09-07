import React, {useEffect, useState} from "react";
import "./video-library.scss";
import axiosInstance from "../../config/axios-instance";
import ProjectCard from "../project-card/ProjectCard";
const VideoLibrary = props => {
    const [file, setFile] = useState([]);
    useEffect(() => {
        if(props.vidios.file != null){
            setFile(props.vidios.file.toString().replace("watch?v=","embed/"));
        }
    }, [props.vidios.file]);
    const frame = (
        <div className="grid-list video-list">
            {props.vidios.map(v =>
                <div key={v.id} className="video-card">
                    <iframe
                        title={v.title}
                        src={v.file.toString().replace("watch?v=","embed/")}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );

  return (
    <div className={"video-library"} id={"videos-id"}>
      <div className="content-block-full-with">
        <div className="content-container">
          <div className={"marger-top"} />
          <h1 className={"blue-txt"}>Videos</h1>
            {frame}
        </div>
      </div>
    </div>
  );
};

export default VideoLibrary;
