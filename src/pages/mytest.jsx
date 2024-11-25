import React from "react";
import "./mytest.css";
import logo from "./newimg/logo1.png";
import cave from "./newimg/s1.jpg";
import Navbar from "../components/Navbar1/navbar";
import background from "./newimg/background.mp4";
import school from "./newimg/s4.jpg";
import galaxy from "./newimg/s3.jpg";
import emaar from "./newimg/w4.jpg";

function Home() {
  const projects = [
    { src: school, title: "New English School" },
    { src: galaxy, title: "Galaxy Party" },
    { src: cave, title: "Cave Wedding" },
    { src: emaar, title: "Burj Khalifa" },
    { src: galaxy, title: "Galaxy Party" },
    { src: cave, title: "Cave Wedding" },
  ];

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
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
  <h2 className="section-header">Our Works</h2>
  <div className="content">
    {projects.map((project, index) => (
      <div className="project-card" key={index}>
        <div className="project-image">
          <img src={project.src} alt={project.title} />
        </div>
        <div className="project-info">
          <strong className="project-title">
            <span>{project.title}</span>
          </strong>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="services-container">
          <h3 className="section-title">Our Services</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
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
