import React from "react";
import "./404-notfound.scss";
import { withRouter } from "react-router-dom";
import {Helmet} from "react-helmet";
const NotFoundPage = props => {
  const goHome = () => {
    props.history.push("/");
  };
  return (
    <div className={"not-found-page"}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Mourakiboun | 404 Not Found</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="flex-container-404">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <button onClick={goHome} className={"btn-link-filled"}>
                {" "}
                Accueil
            </button>
        </div>
    </div>
  );
};

export default withRouter(NotFoundPage);
