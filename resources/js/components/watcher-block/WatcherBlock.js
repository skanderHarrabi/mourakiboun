import React from 'react';
import "./watcher-block.scss";
import {Link} from "react-router-dom";
import badge from "../../assets/img/badge.png";
const WatcherBlock = () => {
    return (
      <div className={"watcher-block"}>
        <div className="content-block-full-with">
          <div className="content-container">
            <div className="watcher-flex">
                <div className="left">
                    <h1 className={"blue-txt"}>
                      Comment puis-je être un observateur/trice?
                    </h1>
                    <Link className={"btn-link-filled"} to="/contact" target={"_blank"}>
                        {" "}
                        <span>S’inscrire</span>
                    </Link>
                </div>
                <div className="right">
                    <h1 className={"very-large-text"}>Observa-
                        teur/trice?</h1>
                    <div  className={"badge-fixed"}>
                        <img src={badge} alt="Badge mourakiboun"/></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WatcherBlock;
