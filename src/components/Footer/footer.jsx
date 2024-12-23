import React from "react";
import "./footer.css";
import logo from '../../pages/newimg/logo1.png';
import G1 from '../../pages/newimg/G1.png';
import G2 from '../../pages/newimg/G2.png';
import G3 from '../../pages/newimg/G3.png';
import G4 from '../../pages/newimg/G4.png';

function Social() {
  return (
    <>
      <section className="footer-gallery">
        <div className="footer-image">
          <a href="https://www.instagram.com/reel/DB9X-k4NXlE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            <img src={G1} alt="Gallery 1" />
            <span className="play-icon">&#9654;</span>
          </a>
        </div>
        <div className="footer-image">
          <a href="https://www.instagram.com/reel/DC__2a7tg1F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            <img src={G2} alt="Gallery 2" />
            <span className="play-icon">&#9654;</span>
          </a>
        </div>
        <div className="footer-image">
          <a href="https://www.instagram.com/reel/DCo6xtDNamY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            <img src={G3} alt="Gallery 3" />
            <span className="play-icon">&#9654;</span>
          </a>
        </div>
        <div className="footer-image">
          <a href="https://www.instagram.com/reel/DCUN3vdtbiB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            <img src={G4} alt="Gallery 4" />
            <span className="play-icon">&#9654;</span>
          </a>
        </div>
      </section>
      <footer className="footer">
        {/* Bottom Section */}
        <div className="footer-content">
          <div className="footer-contact-container">
            <div className="footer-contact">
              <h3>CONTACT DETAILS</h3>
              <p>1st Floor, 142 Northwood St, West Leederville</p>
              <p>(by appointment)</p>
              <p>PO Box 101, Mount Hawthorn WA 6915</p>
              <p><a href="mailto:lara@whiteevents.com.au">farah@whiteevents.com.au</a></p>
              <p>0414 184 341</p>
            </div>
          </div>

          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="footer-menu-container">
            <div className="footer-menu">
              <h3>MENU</h3>
              <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#gallery">GALLERY</a></li>
                <li><a href="#testimonials">TESTIMONIALS</a></li>
                <li><a href="#contact">CONTACT</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© White Events | Designed by Jessica M. Studio</p>
        </div>
      </footer>
    </>
  );
}

export default Social;


