import React from "react";
import "../style/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/assets/dtLogoBlack.webp"
          alt="Logo"
          className="navbar-logo-image"
        />
      </div>
      <div className="navbar-links">
        <button className="navbar-button"><Link to='/'>Home</Link></button>
        <button className="navbar-button"><Link to='/about'>About</Link></button>
        <button className="navbar-button"><Link to='/services'>Services</Link></button>
        <button className="navbar-button"><Link to='/product'>Product</Link></button>
        <button className="navbar-button"><Link to='/contact'>Contact</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
