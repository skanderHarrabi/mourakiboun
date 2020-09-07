import React from "react";
import BigLogo from "../svg/BigLogo";
import "./footer.scss"
import GoTopBTN from "../svg/GoTopBTN";
import {smoothScroll} from "../../tools/SmoothScrool";
import sponsorLogo from "../../assets/img/sponsor.png"
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    const scrollToTop = ()=>{
        smoothScroll(0,window);
    }

  return (
    <div className={"footer"}>
      <div className="content-block-full-with ">
        <div className="content-container">
          <div className="footer-grid">
            <div className="col">
              <BigLogo />
            </div>
            <div className="col">
              <div className="block">
                  <h4>Mourakiboun</h4>
                  <p>
                      Aujourd'hui nous sommes forts de près de 4000 observateurs, on
                      ne s'arrêtera pas là, nous espérons continuer notre chemin et
                      nous renforcer dans le domaine de l'observation des élections
                      pour être toujours présent afin de garantir la transparence et
                      promouvoir les valeurs démocratiques
                  </p>
              </div>
            </div>
              <div className="col">
                  <div className="block">
                      <h4>Adresse</h4>
                      <p>
                          Rue Omar Quadeh - Imm Pacha Centre - Bloc B - 1er Etage - Bureau N°1
                          Tunis, Tunisia
                      </p>
                  </div>
                  <div className="block">
                      <h4>Numero Tel</h4>
                      <a href="tel:71 908 435" target={"_blank"}>71 908 435</a>
                  </div>
              </div>
              <div className="col">
                  <div className="block">
                      <h4>adresse e-mail</h4>
                      <a href="email:contact@mourakiboun.org" target={"_blank"}>contact@mourakiboun.org</a>
                  </div>
                <div className="block">
                    <h4>Regoignez-nous sur</h4>
                    <a href="email:career@mourakiboun.org" target={"_blank"}>career@mourakiboun.org</a>
                </div>
              </div>
              <div className="col">
                  <div className="to-top-col">
                      <button  onClick={scrollToTop}>
                          <GoTopBTN/>
                      </button>
                  </div>
              </div>
          </div>
            <div className="copyright">
                <h5>{year} © mourakiboun. All rights reserved.</h5>
                <div className="sponsor-flex">
                    <p>Site web sponsorisé par</p><img src={sponsorLogo} alt={"Site web sponsorisé par la francophonie"}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
