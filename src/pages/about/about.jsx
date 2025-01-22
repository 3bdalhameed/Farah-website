import React from "react";
import teamImage from "../newenglish/img/1.jpg";
import Navbar from "../../components/Navbargallery/navbar";

function About() {
  return (
    <section id="about" className="py-24 bg-gray-100">
        <div>
            <Navbar />
        </div>
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={teamImage}
              alt="Team"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At White Events, we specialize in creating breathtaking and
              unforgettable events. Based in Perth, our team of experienced
              designers and planners work tirelessly to bring your vision to
              life. Whether it's an intimate wedding or a grand celebration, we
              ensure every detail is perfectly executed.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Since 2005, we have built a reputation for excellence, creativity,
              and elegance. Led by industry expert Lara White, our team has
              planned countless memorable events across Western Australia.
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 px-8 py-3 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
