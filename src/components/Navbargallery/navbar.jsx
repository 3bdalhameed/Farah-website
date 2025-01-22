import React from 'react';
import logo from '../../pages/newimg/logo1.png';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50 flex items-center justify-between px-6 py-4">
      {/* Left Navigation Items */}
      <div className="flex gap-6 text-white px-12">
        <a href="#home" className="hover:text-blue-600 transition">
          Home
        </a>
        <a href="#about" className="hover:text-blue-600 transition">
          About
        </a>
        <a href="#services" className="hover:text-blue-600 transition">
          Services
        </a>
      </div>

      {/* Logo */}
      <div className="flex justify-center items-center">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Right Navigation Items */}
      <div className="flex gap-6 text-white px-12">
        <a href="#gallery" className="hover:text-blue-600 transition">
          Gallery
        </a>
        <a href="#testimonials" className="hover:text-blue-600 transition">
          Testimonials
        </a>
        <a href="#appointment" className="hover:text-blue-600 transition">
          Book
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
