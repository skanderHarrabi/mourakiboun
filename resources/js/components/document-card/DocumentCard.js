import React from 'react';
import "./documnet-card.scss";
import PdfIcon from "../svg/PdfIcon";

const DocumentCard = props => {
    return (
        <div className="document-card">
            <div className="left">
                <h4 className={"blue-txt"}>{props.pub.title}</h4>
                <p>
                    {props.pub.content}
                    {/*{`${props.pub.content.substring(0, 10)}...`}*/}
                </p>
            </div>
            <div className="right">
                <a href={("storage/"+ props.pub.file)} download className="download-square">
                    <PdfIcon/>
                    <h5>Télécharger en mode PDF</h5>
                </a>
            </div>
        </div>
    );
};

export default DocumentCard;
