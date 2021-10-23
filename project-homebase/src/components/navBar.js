import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand col-lg-1 col-md-1 col-sm-2 col-xs-12" href="/">Home</a>
        <Link to="/lessons" className="navbar-brand col-lg-1 col-md-1 col-sm-3 col-xs-12">Lessons</Link>
        <Link to="/projects" className="navbar-brand col-lg-1 col-md-1 col-sm-3 col-xs-12">Account</Link>
        <Link to="/about" className="navbar-brand col-lg-1 col-md-1 col-sm-3 col-xs-12">About</Link>
      </nav>
    )
}
export default NavBar;