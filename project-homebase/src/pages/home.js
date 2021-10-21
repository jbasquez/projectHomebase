import React from "react";
import Activities from "../components/activities"
import "../css/home.css";

function Home() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <Activities />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <h2>Lessons</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <h2>Accomplishments</h2>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <h2>Articles</h2>
          </div>
        </div>
      </div>
    );
  }

  export default Home;