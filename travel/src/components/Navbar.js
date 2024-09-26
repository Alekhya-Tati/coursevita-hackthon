import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><b>COURSEVITA MATCH DEVELOPERS</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/"><b>HOME</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus"><b>ABOUT US</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services"><b>SERVICES</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile"><b>PROFILE CREATION</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact"><b>CONTACT US</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login"><b>LOGIN</b></Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
