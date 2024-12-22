import React from "react";
import "./project.css";
import galaxy from "../../pages/newimg/s3.jpg";

function project(){
return (
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
);
}
export default project;