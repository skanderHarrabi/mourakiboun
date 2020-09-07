import React from "react";
import "./members-block.scss";
import adminUserImg from "../../assets/img/adminuser.jpg";
import MemberCard from "../member-card/MemberCard";
import LazyImg from "../lazy-img/LazyImg";
import FounderImg from "../../assets/img/founder.jpg"
const MembersBlock = props => {
  return (
    <div className="members-block">
      <div className="content-block-full-with">
        <div className="content-container">
          <div className="flex-members">
            <div className="left">
              <div className="img-container">
                <LazyImg src={FounderImg} thumb={FounderImg}
                         alt={"adminUserImg"}/>
              </div>
            </div>
            <div className="right">
              <div className="block-skewed-left">
                <div className="text-container-center">
                  <h1 className={"blue-txt"}>Les Fondateurs</h1>
                  <h2 className={"blue-txt"}>Rafik HALOUANI</h2>
                  <h3 className={"blue-txt"}>Coordinateur Génnéral</h3>
                  <p>
                    Nunc gravida pellentesque sagittis. Aenean mi risus, dapibus
                    non nisi in, mattis tincidunt erat. Cras neque massa,
                    efficitur at eros sed, commodo commodo tortor. Duis nec leo
                    tellus. Praesent efficitur non nunc in consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className={"blue-txt marged-left-text go-bottom"} style={{
            maxWidth: '44rem'
          }}>Ancien Bureau Exécutif</h1>
          <h1  className={"blue-txt marged-left-text"} style={{
            fontWeight: 'normal'
          }}>2011-2019</h1>
          <div className="list-members">
            {
              props.staffAdministratif.map(s => {
                return <MemberCard key={s.id} staff={s}/>
              })}

          </div>
          <h1 className={"blue-txt marged-left-text"} style={{
            maxWidth: '44rem'
          }}>Bureau Exécutif</h1>
          <h1  className={"blue-txt marged-left-text"} style={{
            fontWeight: 'normal'
          }}>2019-2024</h1>
          <div className="list-members">
            {
              props.staffExecutif.map(s => {
                return <MemberCard key={s.id} staff={s}/>
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersBlock;
