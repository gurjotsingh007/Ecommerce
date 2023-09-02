import React from 'react'
import logo from '../../../images/logo.png'
import './Header.css'
import {Link, BrowserRouter as Router} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <Router>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img className='nav-image' src={logo}/>
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
                <Link className="nav-link" to="/product">Products</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-danger" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    </Router>
    </>
  )
}

export default Header
