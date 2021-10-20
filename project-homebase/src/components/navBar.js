import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="navbar-brand"></div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/projects" className="nav-link">Portfolio</Link>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;