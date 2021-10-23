import React from 'react';
import quiz from '../units.json';
import Unit from '../props/unit';

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
      </div>
    );
  }

  export default Unit1;