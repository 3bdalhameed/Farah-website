import React from "react";
import "./mytest.css";
import cave from "./newimg/s1.jpg";
import Navbar from "../components/Navbar1/navbar";
import background from "./newimg/background.mp4";
import school from "./newimg/s4.jpg";
import galaxy from "./newimg/s3.jpg";
import emaar from "./newimg/w4.jpg";

function Home() {


  const services = [
    { title: "Wedding Planning", description: "Tailored solutions for your big day." },
    { title: "Corporate Events", description: "Seamlessly organized events to impress your clients." },
    { title: "Private Parties", description: "Create unforgettable moments for you and your guests." },
    { title: "Venue Decoration", description: "Transform spaces into stunning event venues." },
    { title: "Catering Services", description: "Delicious menus crafted for every occasion." },
  ];

  return (
    <>
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Section */}
      <section className="main">
        <div className="video-container">
          <video
            src={background}
            alt="main visual"
            autoPlay
            loop
            muted
            className="main-vid"
          ></video>
          <div className="overlay"></div>
        </div>
      </section>

{/* Projects Section */}
<section className="projects" id="projects">
  {/* Overlay Text */}
  <div className="overlayP">
    <p>
      FROM THE BOTTOM OF OUR HEARTS THANK YOU FOR<br />
      CREATING THE WEDDING OF OUR DREAMS AND MAKING IT<br />
      SUCH A MEMORABLE DAY FOR US.<br />
      <strong>DEMI & MARKO</strong>
    </p>
  </div>
  <div className="projects-container">
    {/* Image Section */}
    <div className="image-section">
      <img src={galaxy} alt="Wedding Event" />
    </div>
    {/* Right Side: Text Content */}
    <div className="text-section">
      <h2>CREATORS OF EXCEPTIONAL EVENTS</h2>
      <p>
        White Events is a creative event design and management studio, based in Perth and
        available for weddings and events throughout Western Australia.
      </p>
      <p>
        Established in 2005, White Events has earned a reputation as Western Australia's
        leading wedding planning studio, led by industry expert,{" "}
        <a href="#">Lara White</a>.
      </p>
      <a href="#" className="btn-view">
        VIEW OUR SERVICES
      </a>
    </div>
  </div>
</section>

<section className="portfolio">
      <div className="portfolio-header">
        <h2>OUR PORTFOLIO</h2>
        <p>
          Specialising in blank-canvas weddings, our style is best described as classic with a modern edge,
          and we pride ourselves on the versatility of the events we design, ensuring no two weddings will ever look the same.
        </p>
        <a href="#work" className="portfolio-link">VIEW OUR WORK</a>
      </div>

      <div className="portfolio-gallery">
        {/* First Image */}
        <div className="gallery-item">
          <img src="https://via.placeholder.com/400x600" alt="Wedding Flowers" />
          <div className="overlay">
            <div className="overlay-text">
              <p>TAYLA & CHRIS</p>
              <a href="#view">VIEW MORE</a>
            </div>
          </div>
        </div>

        {/* Second Image */}
        <div className="gallery-item">
          <img src="https://via.placeholder.com/400x600" alt="Wedding Couple" />
          <div className="overlay">
            <div className="overlay-text">
              <p>TAYLA & CHRIS</p>
              <a href="#view">VIEW MORE</a>
            </div>
          </div>
        </div>

        {/* Third Image */}
        <div className="gallery-item">
          <img src="https://via.placeholder.com/400x600" alt="Wedding Bouquet" />
          <div className="overlay">
            <div className="overlay-text">
              <p>TAYLA & CHRIS</p>
              <a href="#view">VIEW MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* Services Section */}
      <section className="services-section">
      <div className="services-content">
        {/* Left Image */}
        <div className="services-image">
          <img
            src="https://via.placeholder.com/500x700" /* Replace with actual left image URL */
            alt="Bride and Groom Holding Hands"
          />
        </div>

        {/* Text Content */}
        <div className="services-text">
          <h2>OUR SERVICES</h2>
          <p>
            As a specialised event design studio we offer a selection of wedding planning,
            styling & management services, designed to suit the couples that still want to be a
            little hands on, and those that just want to leave it all in the hands of the experts.
          </p>
          <div className="services-buttons">
            <button className="btn-services">Styling</button>
            <button className="btn-services">Styling & Management</button>
            <button className="btn-services">Planning, Styling & Management</button>
            <button className="btn-services">Destination Weddings</button>
            <button className="btn-services">Private & Social Events</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="services-image">
          <img
            src="https://via.placeholder.com/500x700" /* Replace with actual right image URL */
            alt="Elegant Wedding Table Setup"
          />
        </div>
      </div>
    </section>

      {/* Appointment Section */}
      <section className="appointment" id="appointment">
        <div className="appointment-container">
          <h3 className="section-title">Book Your Appointment</h3>
          <form className="appointment-form">
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time:</label>
              <input type="time" id="time" />
            </div>
            <div className="form-group">
              <label htmlFor="details">Additional Details:</label>
              <textarea
                id="details"
                placeholder="Enter any specific requirements"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-title">
            © <span id="about">White Events</span> - All Rights Reserved.
          </p>
          <div className="social-icons">
            <a href="#facebook" className="social-link">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#twitter" className="social-link">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#pinterest" className="social-link">
              <i className="fa fa-pinterest"></i>
            </a>
            <a href="#instagram" className="social-link">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
