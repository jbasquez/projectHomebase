import React from 'react';
import '../css/welcome.css';

function Welcome() {
    return (
      <div>
        <div className="row">
            <div className="center col-lg-12 col-md-8 col-sm-10 col-xs-10">
                <div className="container">
                    <div className="wrapper">
                        <div className="welcomeMessage welcomeImg">
                            <div className="welcomeWidth">
                                <h2 className="welcomeText">Welcome to Home Base!</h2>
                                <p className="welcomeText">Moto:hdfjakldasfj</p>
                                <p className="welcomeText">about:</p>
                                <p className="welcomeText">buttons here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  export default Welcome;