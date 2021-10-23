import React from 'react';
import quiz from '../units.json';
import Unit from '../props/unit';
import {Link} from 'react-router-dom';
import "../css/unit.css";

function Unit1() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12">
            <Unit
              id={quiz[0].id}
              name={quiz[0].name}
              lesson={quiz[0].lesson}
            />
          </div>
        </div>
        <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12">
        <Link to={{ pathname: "https://www.ncrec.gov/" }} target="_blank" className="unitBtn1">Brochure</Link>
        <Link to={{ pathname: "https://www.ncrec.gov/Brochures/WWREADisclosureForm.pdf" }} target="_blank" className="unitBtn1">Sign Here</Link>
        </div>
        </div>
      </div>
    );
  }

  export default Unit1;