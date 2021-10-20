import React from 'react';
function Activities() {
    return (
      <div >
          <h2>Your new Activity</h2>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12">
            <p>user icon</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12">
              <p>icon % done with unit</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12">
            <p>user name</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12">
              <p>icon % fully done</p>
          </div>
        </div>
      </div>
    );
  }

  export default Activities;