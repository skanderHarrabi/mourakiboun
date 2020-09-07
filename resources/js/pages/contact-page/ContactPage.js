import React, {useEffect, useRef} from "react";
import "./contact-page.scss";
import WatcherBlock from "../../components/watcher-block/WatcherBlock";
import NewsLettreBlock from "../../components/newsletter-block/NewsLettreBlock";
import Map from "pigeon-maps";
import Overlay from "pigeon-overlay";
import ArrowYellowRight from "../../components/svg/ArrowYellowRight";
import ContactForm from "../../components/contact-form/ContactForm";
import MarkerMap from "../../components/svg/MarkerMap";
import gsap from "gsap";
import {Helmet} from "react-helmet";
const ContactPage = () => {
  const refForm = useRef();
  const goToForm = () =>{
    if(refForm){
      if(refForm.current){

        refForm.current.scrollIntoView({
          behavior:'smooth'
        },false)

      }
    }
  };

  useEffect(()=>{
    gsap.fromTo('.left',{delay:1,opacity:0,scale:0.9},{opacity:1,scale:1});
    gsap.fromTo('.right',{delay:1.5,opacity:0,scale:0.9},{opacity:1,scale:1});
  },[]);
  return (
    <div className={"contact-page"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mourakiboun | Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="marged-top-page">
        <div className="content-block-full-with">
          <div className="content-container">
            <div className="contact-map-flex">
              <div className="left">
                <h1>Contactez-Nous</h1>
                <p>Tunis</p>
                <p>Rue Omar Quadeh - Imm Pacha Centre - Bloc B - 1er Etage - Bureau N°1
                  Tunis, Tunisia 1002</p>
                <p className={"mini-text"}>Hours 9:00 AM <ArrowYellowRight/>6:00 PM</p>
                <h3>Numéro Tel</h3>
                <a target={"_blank"} href="tel:71 908 435">71 908 435</a>
                <h3>Adresse e-mail</h3>
                <a target={"_blank"} href="mail:contact@mourakiboun.org">contact@mourakiboun.org</a>
              </div>
              <div className="right">
                <Map   boxClassname={"map-box"} center={[36.819472, 10.190623]} zoom={12} >
                  <Overlay  onClick={()=>console.log("test")}  anchor={[36.819472, 10.190623]} offset={[120, 79]}>
                   <button onClick={goToForm} className="marker-btn">
                     <MarkerMap />
                   </button>
                  </Overlay>
                </Map>
              </div>
            </div>
          </div>
        </div>
        <div className="content-block-full-with" >
          <div className="content-container">
            <div className="form-container" ref={refForm}>
              <ContactForm />
            </div>
          </div>
        </div>
        <WatcherBlock />
        <NewsLettreBlock />
      </div>
    </div>
  );
};

export default ContactPage;
