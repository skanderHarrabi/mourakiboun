import React, {useEffect} from 'react';
import NewsCard from "../news-card/NewsCard";
import SliderThree from "../slider-three/SliderThree";

import "./list-top-news.scss";
import {fetchActualities} from "../../actions/actualites-actions/actions";
import {useDispatch, useSelector} from "react-redux";
import ArrowRight from "../svg/ArrowRight";

const LibraryEelection = props => {
  const dispatch = useDispatch();
  const actualities = useSelector(state => state.actualitesReducer.actualites);
  useEffect(() => {
    dispatch(fetchActualities());
  }, [])
  let act = (
    <div className="top-news">
      <SliderThree>
        {actualities.map(actualitie =>
          <NewsCard key={actualitie.id} actualitie={actualitie}/>
        )}
      </SliderThree>
    </div>
  );
  return (
    <div className={"list-top-news"}>
     <div className="header">
       <h1 className={"blue-txt max-big-with-txt"}>Bibliothèque<br/>
         électorale</h1>
       <div className="yellow-block">
         <h1 className="title">Toutes les ressources</h1>
         <ArrowRight/>
       </div>
     </div>
      {act}

    </div>
  );
};

export default LibraryEelection;
