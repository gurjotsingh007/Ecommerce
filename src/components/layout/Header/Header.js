import React from 'react';
import logo from '../../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import loginLogo from '../../../images/login.png';
import cartLogo from '../../../images/cart.png';
import UserOption from './UserOption';
import { useSelector } from 'react-redux';

const Header = () => {
  const { user, isAuthenticated } = useSelector(state => state.users);
  const marginStyle = isAuthenticated ? { marginRight: "4rem" } : {};

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ zIndex: "1" }}>
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
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

          <Link className="nav-link" to="/search">
            <button className="btn btn-dark">
              Search
            </button>
          </Link>
          <Link className="nav-link" to="/cart">
            <img className='cartLogo' src={cartLogo} alt='cartLogo' />
          </Link>
          <Link className="nav-link" to="/login" style={marginStyle}>
            <img className='userProfile' src={loginLogo} alt='userProfile' />
          </Link>

          {isAuthenticated && <UserOption user={user} />}
        </div>
      </div>
    </nav>
  );
}

export default Header;
