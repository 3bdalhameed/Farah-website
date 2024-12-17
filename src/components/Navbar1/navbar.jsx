import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../pages/newimg/logo1.png';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-items-left">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
      </div>

      


      <div className="nav-items-right">
        <a href="#gallery">Gallery</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#appointment">Book</a>
      </div>
    </nav>
    <div className={`logo-container ${isScrolled ? 'logo-scrolled' : ''}`}>
          <img src={logo} alt="Logo" />
      </div>
    </>
  );
};

export default NavBar;
