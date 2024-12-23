import React from 'react';
import './navbar.css';
import logo from '../../pages/newimg/logo1.png';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-items-left">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
      </div>

      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-items-right">
        <a href="#gallery">Gallery</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#appointment">Book</a>
      </div>
    </nav>
  );
};

export default NavBar;
