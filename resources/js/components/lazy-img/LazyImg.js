import React, { useState } from "react";
import gsap from "gsap";

const LazyImg = props => {
  let [loaded, setLoaded] = useState(false);
  let [imgSource, setImgSource] = useState(props.thumb);

  const imageLoadedHandler = () => {
      setTimeout(()=>{
          setImgSource(props.src);
          setLoaded(true);
          gsap.to(".lazy-img",{webkitFilter:"blur(0px)"})
      },1000)
  };

  return (
    <img
      className={"lazy-img"}
      style={{
        filter: !loaded ? "blur(20px)" : "blur(20px)"
      }}
      onLoad={imageLoadedHandler}
      src={imgSource}
      alt={props.alt}
    />
  );
};

export default LazyImg;
