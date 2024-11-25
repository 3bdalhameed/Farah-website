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
          <img src={logo} alt="" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="button-container">
          <h3 className="main-btn-proj">Our Works</h3>
        </div>
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
        <p className="footer-title">
        © <span id="about">White Events</span>
        </p>
        <div className="social-icons">
          <a href="#">
            <img src={logo} alt="facebook" />
          </a>
          <a href="#">
            <img src={logo} alt="twitter" />
          </a>
          <a href="#">
            <img src={logo} alt="pinterest" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Home;
