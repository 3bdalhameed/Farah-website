import React from "react";
import "./services.css";
import background from "../../pages/newimg/background.mp4";

function Services(){
return(
          <section className="services-section">
          <div className="services-content">
            {/* Left Image */}
            <div className="services-image">
              <img
                src="https://via.placeholder.com/500x800" /* Replace with actual left image URL */
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
                src="https://via.placeholder.com/500x800" /* Replace with actual right image URL */
                alt="Elegant Wedding Table Setup"
              />
            </div>
          </div>
        </section>
);
}
export default Services;