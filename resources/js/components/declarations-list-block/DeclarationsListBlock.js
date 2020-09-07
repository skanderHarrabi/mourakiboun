import React from "react";
import "./declarations-list-block.scss";
import DeclarationCard from "../declaration-card/DeclarationCard";

const DeclarationsListBlock = props => {
  return (
    <div className={"declarations-list-block"} id={"declaration-id"}>
      <div className="content-block-full-with">
        <div className="content-container">
          <div className={"marger-top"} />
          <h1 className={"blue-txt"}>Déclarations</h1>
            <div className="declarations-list">
                {props.declarations.map(d =>
                    <DeclarationCard key={d.id} declaration={d}/>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DeclarationsListBlock;
