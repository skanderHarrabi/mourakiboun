import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Navbar from "./components/navbar/Navbar";
import { logout } from "./actions/auth-actions/actions";
import ContactPage from "./pages/contact-page/ContactPage";
import Footer from "./components/footer/Footer";
import ScrollReveal from "scrollreveal";
import NotFoundPage from "./pages/404/NotFoundPage";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AboutPage from "./pages/about-page/AboutPage";
import MediaPage from "./pages/media-page/MediaPage";
import ProjectsPage from "./pages/projects-page/ProjectsPage";
import ObservationsPage from "./pages/observations-page/ObservationsPage";
import NewsDetailsPage from "./pages/news-details-page/NewsDetailsPage";
import RepportsDetailsPage from "./pages/repports-details-page/RepportsDetailsPage";
import ProjectDetailsPage from "./pages/project-details-page/ProjectDetailsPage";
import DeclarationsDetailsPage from "./pages/declarations-details-page/DeclarationsDetailsPage";
import ActivityDetailsPage from "./pages/activities-details-page/ActivityDetailsPage";
const App = props => {
  useEffect(() => {
    // ScrollReveal().reveal("h1.blue-txt", { reset: true, delay: 200, scale: 0.85 });
    // ScrollReveal().reveal(".ant-input", { reset: true, delay: 260 });
  }, []);
  return (
    <div className={"app"}>
      <Navbar
        user={props.user}
        isLoggedIn={props.isLoggedIn}
        logout={props.logout}
      />
      <div className="page-container">
        <Route
          render={({location}) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route exact path={"/"} component={HomePage} />
                  <Route exact path={"/contact"} component={ContactPage} />
                  <Route exact path={"/a-propos"} component={AboutPage} />
                  <Route exact path={"/media"} component={MediaPage} />
                  <Route exact path={"/projets"} component={ProjectsPage} />
                  <Route exact path={"/news/:id"} component={NewsDetailsPage} />
                  <Route exact path={"/repports/:id"} component={RepportsDetailsPage} />
                  <Route exact path={"/projects/:id"} component={ProjectDetailsPage} />
                  <Route exact path={"/declarations/:id"} component={DeclarationsDetailsPage} />
                  <Route exact path={"/activities/:id"} component={ActivityDetailsPage} />
                  <Route exact path={"/elections"} component={ObservationsPage} />
                  <Route component={NotFoundPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />

          <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = reduxStore => {
  return {
    isLoggedIn: reduxStore.authReducer.isLoggedIn,
    user: reduxStore.authReducer.user,
    isLoadingUser: reduxStore.authReducer.isLoadingUser
  };
};

export default connect(
    mapStateToProps,
    { logout }
)(App);
