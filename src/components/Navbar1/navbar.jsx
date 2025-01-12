import React, { useState, useEffect } from "react";
import logo from "../../pages/newimg/logo1.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-24 py-6 transition-all duration-500 z-50 ${
          isScrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Left Navigation */}
        <div className="flex gap-8 text-white">
          <a href="#home" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 transition">
            About
          </a>
          <a href="#services" className="hover:text-gray-400 transition">
            Services
          </a>
        </div>

        {/* Right Navigation */}
        <div className="flex gap-8 text-white">
          <a href="#gallery" className="hover:text-gray-400 transition">
            Gallery
          </a>
          <a href="#testimonials" className="hover:text-gray-400 transition">
            Testimonials
          </a>
          <a href="#appointment" className="hover:text-gray-400 transition">
            Book
          </a>
        </div>
      </nav>

      {/* Logo */}
      <div
        className={`fixed transition-all duration-500 transform z-50 ${
          isScrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-28" // Small logo size
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2" // Large centered logo
        }`}
      >
        <img
          src={logo}
          alt="Logo"
          className="w-full h-auto "
        />
      </div>
    </>
  );
};

export default NavBar;
