import React, { useState } from 'react';
import { FaCog, FaBell, FaFlag, FaUser, FaUsers, FaGavel, FaChartBar } from 'react-icons/fa';
import './navbar.css';
import logo from "../../pages/newimg/logo1.png";
import { checkAuthentication } from './auth';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleAuthRedirect = async (path) => {
    const isAuthenticated = await checkAuthentication();
    if (isAuthenticated) {
        navigate(path);
    } else {
        navigate("/login");
    }
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="burger-menu" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-items ${isMenuOpen ? 'show' : ''}`}>
        <li className="nav-item">
          <a href="#about">
          <span>About</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="Scorevoard">
            <span>Services</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="galary">
            <span>Gallery</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="Notifications">
            <span>Testimonials</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a href='#appointment'>
            <span>Book an appointment</span>
            </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
