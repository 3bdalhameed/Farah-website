import React from "react";

function Feadback() {
  return (
    <section className="bg-black text-white flex items-center justify-center px-4 py-16 h-[70vh] relative">
      <div className="flex items-center justify-center gap-8 w-full max-w-4xl">
        {/* Left Arrow */}
        <div className="cursor-pointer text-4xl hover:scale-110 transition-transform">
          &larr;
        </div>

        {/* Testimonial Content */}
        <div className="bg-gray-100 text-black p-8 rounded-md shadow-lg text-center max-w-2xl">
          <p className="text-lg mb-4">
            From the minute we first spoke to Lara, she put both of us at ease -
            which was hard to do given we were planning a Perth wedding from
            Melbourne! Lara brought our vision to life (and made it even better)
            and was so great to have as a support during the day. Her eye for
            detail and elegant taste is exactly what makes her one of the best!
          </p>
          <p className="font-bold text-xl">Melanie & Nick</p>
        </div>

        {/* Right Arrow */}
        <div className="cursor-pointer text-4xl hover:scale-110 transition-transform">
          &rarr;
        </div>
      </div>
    </section>
  );
}

export default Feadback;
