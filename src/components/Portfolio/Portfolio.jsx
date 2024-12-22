import React from "react";
import "./portfolio.css";


function portfolio(){
return(
    
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
);
}
export default portfolio;