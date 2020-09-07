import React from 'react';
import "./img-page-header.scss";
import LazyImg from "../lazy-img/LazyImg";

const ImgPageHeader = (props) => {
    return (
        <div className={"img-page-header"}>
            {props && props.img ? <div className="img-container">
                <LazyImg src={props.img} thumb={props.thumb} alt={props.alt}/>
            </div> : null}
            <div className="content-block-full-with">
                <div className="content-container">
                    <div className="content">
                        <div className="text">
                            <h1 className={"white-txt"}>{props && props.title ? props.title : null}</h1>
                            <p>{props && props.description ? props.description : null}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ImgPageHeader;
