import React from "react";

function Appointment() {
  return (
    <section className="bg-white py-12 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Book Your Appointment</h3>
        <form className="space-y-6">
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="text-gray-700 font-medium mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="email" className="text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="date" className="text-gray-700 font-medium mb-2">
              Date:
            </label>
            <input
              type="date"
              id="date"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="time" className="text-gray-700 font-medium mb-2">
              Time:
            </label>
            <input
              type="time"
              id="time"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col text-left">
            <label
              htmlFor="details"
              className="text-gray-700 font-medium mb-2"
            >
              Additional Details:
            </label>
            <textarea
              id="details"
              placeholder="Enter any specific requirements"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-20"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Appointment;
