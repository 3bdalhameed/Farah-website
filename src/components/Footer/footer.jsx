import React from "react";
import "./footer.css";
import logo from '../../pages/newimg/logo1.png';


function Social(){
return(
    <>
      <section className="footer-gallery">
        <div className="footer-image">
          <img src="/images/image1.png" alt="Gallery 1" />
          <span className="play-icon">&#9654;</span>
        </div>
        <div className="footer-image">
          <img src="/images/image2.png" alt="Gallery 2" />
          <span className="play-icon">&#9654;</span>
        </div>
        <div className="footer-image">
          <img src="/images/image3.png" alt="Gallery 3" />
          <span className="play-icon">&#9654;</span>
        </div>
        <div className="footer-image">
          <img src="/images/image4.png" alt="Gallery 4" />
          <span className="play-icon">&#9654;</span>
        </div>
      </section>
        <footer className="footer">
        {/* Bottom Section */}
        <div className="footer-content">
          <div className="footer-contact">
            <h3>CONTACT DETAILS</h3>
            <p>1st Floor, 142 Northwood St, West Leederville</p>
            <p>(by appointment)</p>
            <p>PO Box 101, Mount Hawthorn WA 6915</p>
            <p><a href="mailto:lara@whiteevents.com.au">farah@whiteevents.com.au</a></p>
            <p>0414 184 341</p>
          </div>
  
          <div className="footer-logo">
            <img src={logo}></img>
          </div>
  
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
  
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© White Events | Designed by Jessica M. Studio</p>
        </div>
    </footer>
    </>
);
}
export default Social;