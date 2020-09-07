import React from 'react';
import NewsCard from "../news-card/NewsCard";
import RepportCard from "../repport-card/RepportCard";
import SliderThree from "../slider-three/SliderThree";

import "./list-top-news.scss";

const ListTopNews = props => {
  let act = (
    <div className="top-news">
      <SliderThree>
        {props.actualities.map(actualitie =>
          <NewsCard key={actualitie.id} actualitie={actualitie}/>
        )}
      </SliderThree>
    </div>
  );
  return (
    <div className={"list-top-news"}>
      <h1 className={"blue-txt max-big-with-txt"}>Les dernières actualités</h1>
      {act}
    </div>
  );
};

export default ListTopNews;
