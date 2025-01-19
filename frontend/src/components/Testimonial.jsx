import React from "react";
import sisy from "../assets/sisy.png";
import Avatar from "../assets/Avatar1.png";

const Testimonial = () => {
  return (
    <div className="bg-[#F9FAFB] py-16 px-6 sm:px-10 lg:px-20 flex flex-col items-center text-center">
      {/* Logo Section */}
      <div className="flex items-center justify-center space-x-2 mb-8">
        <img
          src={sisy}
          alt="Logo"
          className="w-20 h-8 sm:w-24 sm:h-9 lg:w-28 lg:h-10"
        />
      </div>

      {/* Quote Section */}
      <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 leading-relaxed max-w-3xl mb-10">
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </p>

      {/* Author Section */}
      <div className="flex flex-col items-center">
        <img
          src={Avatar}
          alt="Candice Wu"
          className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full mb-4"
        />
        <div className="text-gray-900 text-lg sm:text-xl lg:text-2xl font-semibold">
          Candice Wu
        </div>
        <div className="text-gray-500 text-sm sm:text-base lg:text-lg">
          Product Manager, Sisyphus
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
