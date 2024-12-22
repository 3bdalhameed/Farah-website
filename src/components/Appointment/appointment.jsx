import React from "react";
import "./appointment.css";
import background from "../../pages/newimg/background.mp4";

function Appointment(){
return(

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
);
}
export default Appointment;