import React from "react";
import "./feadback.css";
import background from "../../pages/newimg/background.mp4";

function Feadback(){
return(
        <section className="testimonial-section">
        <div className="testimonial-container">
          {/* Left Arrow */}
          <div className="testimonial-arrow left-arrow">
            <span>&larr;</span>
          </div>
  
          {/* Testimonial Content */}
          <div className="testimonial-content">
            <p className="testimonial-text">
              From the minute we first spoke to Lara, she put both of us at ease - which was hard
              to do given we were planning a Perth wedding from Melbourne! Lara brought our
              vision to life (and made it even better) and was so great to have as a support during
              the day. Her eye for detail and elegant taste is exactly what makes her one of the best!
            </p>
            <p className="testimonial-author">Melanie & Nick</p>
          </div>
  
          {/* Right Arrow */}
          <div className="testimonial-arrow right-arrow">
            <span>&rarr;</span>
          </div>
        </div>
      </section>
);
}
export default Feadback;