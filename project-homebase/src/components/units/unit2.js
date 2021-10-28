import React from 'react';
import quiz from "../../units.json";
import Unit from '../../props/unit';
import {Link} from 'react-router-dom';
import "../../css/unit.css";

function Unit2() {
    return (
      <div>
        <div className="space">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12">
            <Unit
              id={quiz[1].id}
              name={quiz[1].name}
              lesson={quiz[1].lesson}
            />
          </div>
        </div>
        <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12">
        <Link to={{ pathname: "https://www.ncrec.gov/" }} target="_blank" className="unitBtn1">Brochure</Link>
        <Link to={{ pathname: "https://www.ncrec.gov/Brochures/WWREADisclosureForm.pdf" }} target="_blank" className="unitBtn1">Sign Here</Link>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12">
        <div>
          <p>here are a few links to search homes, learn about the role an agent can play in a transaction, as well as if you are ready to start the process, there's a buyer interview sheet for you to complete at your convenience!</p>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-10 col-xs-12">
        <div>
        <iframe title="video1" width="420" height="315"src="https://www.youtube.com/embed/p6bLCudobFQ"></iframe>
        </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 col-xs-12">
        <div>
        <Link to={{ pathname: "https://www.raefordnchomes.com/" }} target="_blank" className="unitBtn1">Start Your Home Search</Link>
        <Link to="/unit2" className="unitBtn1">Next Unit</Link>
        </div>
        </div>
        </div>
        </div>
      </div>
    );
  }

  export default Unit2;