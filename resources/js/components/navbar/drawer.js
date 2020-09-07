import React, { useEffect, useState } from "react";
import "./drawer.scss";
import { gsap } from "gsap";
import { Link, NavLink, withRouter } from "react-router-dom";
import Logo from "../svg/Logo";
const DrawerNavbar = props => {
    const [drawerOpened, setDrawerOpened] = useState(false);
    const [isChangingStatus, setIsChangingStatus] = useState(false);
    const timelineDrawer = gsap.timeline();
    useEffect(() => {
        props.history.listen(() => {
            setTimeout(async () => {
                await setDrawerOpened(false);
                timelineDrawer.to(".drawer", {
                    duration: 0.6,
                    left: "-100%",
                    ease: "power2.inOut"
                });
                timelineDrawer.to(
                    "#close-ico-part1",
                    { duration: 0.2, width: "0px", ease: "power2.out" },
                    "-=.2"
                );
                timelineDrawer.to(
                    "#close-ico-part2",
                    { duration: 0.2, width: "0px", ease: "power2.out" },
                    "-=.2"
                );

                timelineDrawer.to(
                    "#burger-first-part",
                    {
                        duration: 0.3,
                        width: "3.8rem",
                        opacity: 1,
                        x: 0,
                        y: 0,
                        ease: "power2.out"
                    },
                    "-=.1"
                );
                timelineDrawer.to(
                    "#burger-second-part",
                    {
                        duration: 0.3,
                        width: "3.8rem",
                        opacity: 1,
                        x: 0,
                        y: 0,
                        ease: "power2.out"
                    },
                    "-=.5"
                );
                timelineDrawer.to(
                    "#burger-third-part",
                    {
                        duration: 0.3,
                        width: "3.8rem",
                        opacity: 1,
                        x: 0,
                        y: 0,
                        ease: "power2.out",
                        onComplete: () => setIsChangingStatus(false)
                    },
                    "-=.5"
                );
            }, 500);
        });
    }, [props.history,timelineDrawer]);
    const changeDrawerStatus = async () => {
        await setIsChangingStatus(true);
        if (!drawerOpened) {
            await setDrawerOpened(true);
            timelineDrawer.to(".drawer", {
                duration: 0.6,
                left: "0%",
                ease: "power2.inOut"
            });

            timelineDrawer.to(
                "#burger-first-part",
                {
                    duration: 0.3,
                    width: "4px",
                    opacity: 0,
                    x: "-8px",
                    y: "8.4px",
                    ease: "power2.out"
                },
                "-=.5"
            );
            timelineDrawer.to(
                "#burger-second-part",
                {
                    duration: 0.3,
                    width: "0px",
                    opacity: 0,
                    x: "-9px",
                    y: "8.4px",
                    ease: "power2.out"
                },
                "-=.5"
            );
            timelineDrawer.to(
                "#burger-third-part",
                {
                    duration: 0.3,
                    width: "0",
                    opacity: 0,
                    x: "-9px",
                    y: "-8.4px",
                    ease: "power2.out"
                },
                "-=.5"
            );
            timelineDrawer.to(
                "#close-ico-part1",
                { duration: 0.3, width: "28px", ease: "power2.out" },
                "-=.5"
            );

            timelineDrawer.to(
                "#close-ico-part2",
                {
                    duration: 0.3,
                    width: "2.8rem",
                    ease: "power2.out",
                    onComplete: () => setIsChangingStatus(false)
                },
                "-=.5"
            );
        } else {
            await setDrawerOpened(false);
            timelineDrawer.to(".drawer", {
                duration: 0.6,
                left: "-100%",
                ease: "power2.inOut"
            });
            timelineDrawer.to(
                "#close-ico-part1",
                { duration: 0.2, width: "0px", ease: "power2.out" },
                "-=.2"
            );
            timelineDrawer.to(
                "#close-ico-part2",
                { duration: 0.2, width: "0px", ease: "power2.out" },
                "-=.2"
            );

            timelineDrawer.to(
                "#burger-first-part",
                {
                    duration: 0.3,
                    width: "3.8rem",
                    opacity: 1,
                    x: 0,
                    y: 0,
                    ease: "power2.out"
                },
                "-=.1"
            );
            timelineDrawer.to(
                "#burger-second-part",
                {
                    duration: 0.3,
                    width: "3.8rem",
                    opacity: 1,
                    x: 0,
                    y: 0,
                    ease: "power2.out"
                },
                "-=.5"
            );
            timelineDrawer.to(
                "#burger-third-part",
                {
                    duration: 0.3,
                    width: "3.8rem",
                    opacity: 1,
                    x: 0,
                    y: 0,
                    ease: "power2.out",
                    onComplete: () => setIsChangingStatus(false)
                },
                "-=.5"
            );
        }
    };

    return (
        <>
            <button
                disabled={isChangingStatus}
                className={"menu-icon"}
                onClick={changeDrawerStatus}
            >
                <span className="menu-buger-part" id={"burger-first-part"}></span>
                <span className="menu-buger-part" id={"burger-second-part"}></span>
                <span className="menu-buger-part" id={"burger-third-part"}></span>

                <div className="close-icon">
                    <span id={"close-ico-part1"}></span>
                    <span id={"close-ico-part2"}></span>
                </div>
            </button>
            <div className="drawer">
                <Link className={"logo-drawer"} to={"/"}>
                    <Logo/>
                </Link>
                <div className="nav-links">
                    <NavLink exact to="/" activeClassName="active">
                        Accueil
                    </NavLink>
                    <NavLink to="/a-propos" activeClassName="active">
                        A propos
                    </NavLink>
                    <NavLink to="/media" activeClassName="active">
                        Media
                    </NavLink>
                    <NavLink to="/projets" activeClassName="active">
                        Projets
                    </NavLink>
                    <NavLink to="/elections" activeClassName="active">
                        Observation Des Élections
                    </NavLink>
                    <NavLink to="/contact" activeClassName="active">
                        Contact
                    </NavLink>

                </div>
            </div>
        </>
    );
};

export default withRouter(DrawerNavbar);
