import React from "react";
import Activities from "../components/activities"
import "../css/home.css";

function Home() {
    return (
      <div>
        <div className="homeBox">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
            <Activities />
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
            <h2>Lessons</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <h2>Accomplishments</h2>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <h2>Articles</h2>
          </div>
        </div>
        </div>
      </div>
    );
  }

  export default Home;