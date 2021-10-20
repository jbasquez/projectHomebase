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
                                <h2 className="welcomeText mar">Welcome to Home Base!</h2>
                                <p className="welcomeText">Earn your certificate and dissounts on commission and home warrantys in the process.</p>
                                <p className="welcomeText">About: Learn all the ins and out of real easte investing save your self time and money today.</p>
                                <button className="btnLogin">Login</button>
                                <p className="welcomeText">Or</p>
                                <button className="btnLogin">Create Account</button>
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