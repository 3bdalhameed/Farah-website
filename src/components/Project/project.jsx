import React from "react";
import galaxy from "../../pages/newenglish/img/21.jpg";

function Project() {
  return (
    <section
      id="projects"
      className="relative bg-white py-20 flex flex-col items-center justify-center">
      {/* Overlay Text */}
      <div className="w-11/12 md:w-3/5 text-center bg-white p-8 font-serif text-gray-800 text-lg leading-relaxed shadow-md mb-12">
        <p>
          FROM THE BOTTOM OF OUR HEARTS THANK YOU FOR
          <br />
          CREATING THE WEDDING OF OUR DREAMS AND MAKING IT
          <br />
          SUCH A MEMORABLE DAY FOR US.
        </p>
        <strong className="block mt-4 text-xl font-bold">DEMI & MARKO</strong>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 top-80">
        <img
          src={galaxy}
          alt="Wedding Event"
          className="w-4/6  object-cover opacity-80 top-20"
        />
      </div>

<div className="w-full flex-1 bg-gray-100 p-24 top-14 left-96 text-center shadow-lg max-w-4xl lg:ml-auto lg:mr-0 mx-auto lg:mt-0 lg:mb-0 lg:relative lg:right-0">
  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-gray-800 mb-6 leading-snug">
    CREATORS OF EXCEPTIONAL EVENTS
  </h2>
  <p className="text-base text-gray-600 mb-6 leading-relaxed">
    White Events is a creative event design and management studio, based in Perth and available for weddings and events throughout Western Australia.
  </p>
  <p className="text-base text-gray-600 mb-6 leading-relaxed">
    Established in 2005, White Events has earned a reputation as Western Australia's leading wedding planning studio, led by industry expert,{" "}
    <a href="#" className="text-blue-600 underline">
      Lara White
    </a>
    .
  </p>
  <a href="#buttons-with-link">
  <button
    class="border-b border-slate-400 py-6 px-6 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-b-slate-800 focus:text-white focus:bg-slate-800 focus:border-b-slate-800 active:border-b-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
  >
    VIEW OUR SERVICES
  </button>
</a>
</div>


      </div>
    </section>
  );
}

export default Project;
