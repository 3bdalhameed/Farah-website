import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import "./newenglish.css";
import m1 from "./img/1.jpg";
import m2 from "./img/2.jpg";
import m3 from "./img/3.jpg";
import m4 from "./img/4.jpg";
import m5 from "./img/5.jpg";
import m6 from "./img/6.jpg";
import m7 from "./img/7.jpg";
import m8 from "./img/8.jpg";
import m9 from "./img/9.jpg";
import m10 from "./img/10.jpg";
import m11 from "./img/11.jpg";
import m12 from "./img/12.jpg";
import m13 from "./img/13.jpg";
import m14 from "./img/14.jpg";
import m15 from "./img/15.jpg";
import m16 from "./img/16.jpg";
import m17 from "./img/17.jpg";
import m18 from "./img/18.jpg";
import m19 from "./img/19.jpg";
import m20 from "./img/20.jpg";
import m21 from "./img/21.jpg";
import m22 from "./img/22.jpg";
import m23 from "./img/23.jpg";
import m24 from "./img/24.jpg";
import m25 from "./img/25.jpg";

function ImageGallery() {
  const images = [
    m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20,
    m21, m22, m23, m24, m25
  ];

  const [modalImageIndex, setModalImageIndex] = useState(null);

  const openModal = (index) => {
    setModalImageIndex(index);
  };

  const closeModal = () => {
    setModalImageIndex(null);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setModalImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="jumbotron">
        <h1>
          <i className="fa fa-camera-retro"></i> make your widding unforgettable
        </h1>
        <p>Just a Gallery Full of Beautiful Images...</p>
      </div>
      <div>
        <div className="image-gallery">
          {images.map((src, index) => (
            <div key={index} className="image-item" onClick={() => openModal(index)}>
              <img src={src} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>

        {modalImageIndex !== null && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-button prev" onClick={goToPrevious}>
                &#8249;
              </button>
              <img src={images[modalImageIndex]} alt="Enlarged" />
              <button className="modal-button next" onClick={goToNext}>
                &#8250;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ImageGallery;
