import React from "react";
import "./main.css";
import background from "../../pages/newimg/background.mp4";

function main(){
return(
    <section className="main">
        <div className="video-container">
          <video
            src={background}
            alt="main visual"
            autoPlay
            loop
            muted
            className="main-vid"
          >
          </video>
          <div className="overlay"></div>
        </div>
      </section>
);
}
export default main;