// Header.js
import React from 'react';
import logo from '../../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import userProfile from '../../../images/Profile.png'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className='nav-image' src={logo} alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" exact>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" exact>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" exact>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" exact>About</Link>
            </li>
          </ul>
          <Link className="nav-link" to="/search" exact>
            <button className="btn btn-danger">
              Search
            </button>
          </Link>
          <Link className="nav-link" to="/login" exact>
            <img className='userProfile' src={userProfile} alt='userProfile'/>
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Header;