import React from 'react'
import '../NavbarComponent/Navigationbar.css';
import logo from '../Images/logo.svg'
import { Link } from 'react-router-dom';

function Navigationbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-plate">
        <div className="logo">
          <img className='logo' src={logo} alt='logo' />
        </div>
        <button className="navbar-toggler responsive-button" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse logo-component" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/Home">Home <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active" to="/AboutUs">About <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active" to="/Resources">Resources <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active" to="/Blog">Blog <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link active" to="/Contact">Contact <span className="sr-only"></span></Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigationbar