import React, { useEffect, useState } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import "./navbar.scss";
import Logo from "../svg/Logo";
import FacebookIcon from "../svg/FacebookIcon";
import YoutubeIcon from "../svg/YoutubeIcon";
import PhoneIcon from "../svg/PhoneIcon";
import { Affix } from "antd";
import DrawerNavbar from "./drawer";
import LogoSmallHeader from "../svg/LogoSmallHeader";

const Navbar = props => {
  const [navbarPositionFixed, setNavbarPositionFixed] = useState(true);
  const [classOnScroll, setClassNameScroll] = useState("navbar");
  useEffect(() => {
    if(window.location.pathname.includes("/contact")){
      setNavbarPositionFixed(false);
    }else{
      setNavbarPositionFixed(true);
    }
    props.history.listen(location => {
      window.scrollTo({
        top: 0,
        left: 0
      });
      if (location.pathname.includes("/contact")) {
        setNavbarPositionFixed(false);
      }else{
        setNavbarPositionFixed(true);
      }
    });

    window.addEventListener('scroll', () => {

      if(window.scrollY >= 100){
        setClassNameScroll(" navbar on-scroll-navbar");
      }else{
        setClassNameScroll("navbar ");
      }

    });
  }, [props.history]);
  return (
    <Affix offsetTop={0}>
      <div
        className={classOnScroll}
        style={{
          position: navbarPositionFixed ? "fixed" : "relative",
          background: navbarPositionFixed ? "transparent" : "#083378"
        }}
      >
        <div className="max-width-container">
          <div className="navbar-flex">
            <div className="left">
              <div className="top">
                <NavLink  activeClassName={"active"}   to={"/#"}>
                  FR
                </NavLink>
                <div className="socials">
                  <h3>Nous sommes social </h3>
                  <div className="icons">
                    <a href="https://www.facebook.com/Mourakiboun/" target={"_blank"}>
                      {" "}
                      <FacebookIcon />
                    </a>
                    <a href="https://www.youtube.com/user/Mourakiboun" target={"_blank"}>
                      {" "}
                      <YoutubeIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <NavLink
                    exact
                  activeClassName={"active"}
                  className={"nav-link  caret"}
                  to={"/"}
                >
                  Accueil
                </NavLink>
                <NavLink
                  activeClassName={"active"}
                  className={"nav-link  caret"}
                  to={"/a-propos"}
                >
                  A propos{" "}
                </NavLink>
                <NavLink

                  activeClassName={"active"}
                  className={"nav-link  caret"}
                  to={"/media"}
                >
                  Média{" "}
                </NavLink>
              </div>
            </div>
            <div className="middle">
              <Link className={"logo-navbar-link"} to={"/"}>
                {" "}
                <Logo />
              </Link>
              <Link to={"/"} className={"logo-navbar-small-link"}>
                <LogoSmallHeader/>
              </Link>
            </div>
            <div className="right">
              <div className="top">
                <div className="tel">
                  <a href={"tel:+216 71 908 435"} target={"_blank"}>
                    00216 71 908 435
                  </a>
                  <a className={"icon-link"} href="tel:+216 71 908 435" target={"_blank"}>
                    <PhoneIcon />
                  </a>
                </div>
                <NavLink
                  activeClassName={"active"}
                  className={"nav-link  caret"}
                  to={"/contact"}
                >
                  Contacez-nous
                </NavLink>
              </div>
              <div className="bottom">
                <NavLink
                  activeClassName={"active"}
                  className={"nav-link  caret"}
                  to={"/projets"}
                >
                  Projets
                </NavLink>
                <NavLink
                  activeClassName={"active"}
                  className={"nav-link caret"}
                  to={"/elections"}
                >
                  Observation des élections{" "}
                </NavLink>
              </div>
            </div>
            <DrawerNavbar/>
          </div>
        </div>
      </div>
    </Affix>
  );
};
export default withRouter(Navbar);
