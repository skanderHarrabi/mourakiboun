import React from 'react';
import "./activities-list-block.scss";
import ActivityCard from "../activity-card/ActivityCard";
import SliderThree from "../slider-three/SliderThree";

const ActivitiesListBlock = props => {

  return (
    <div className={"activities-list-block"}>
      <div className="content-block-full-with">
        <div className="content-container ">
          <h1 className={"blue-txt"}>Les activités
            Mourakiboun</h1>
          <div className="list-flex-activities">
            <SliderThree>
              {props.activites.map((a, index) => {
                return <ActivityCard key={a.id} activite={a} index={index}/>
              })
              }
            </SliderThree>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesListBlock;
