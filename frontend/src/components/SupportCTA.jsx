import React from "react";
import Avatar from "../assets/Avatar.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";

const SupportCTA = () => {
  return (
    <div className="bg-[#F9FAFB] rounded-xl p-6 sm:p-8 lg:p-10 max-w-5xl mx-auto text-center shadow-md mb-8">
      {/* User avatars with overlap */}
      <div className="flex justify-center -space-x-3 sm:-space-x-4 mb-6">
        <img
          src={Avatar3}
          alt="User 1"
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-white shadow-md"
        />
        <img
          src={Avatar}
          alt="User 2"
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full z-10 border-2 border-white shadow-md"
        />
        <img
          src={Avatar2}
          alt="User 3"
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-white shadow-md"
        />
      </div>

      {/* Heading */}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-inter font-bold text-gray-900 mb-2">
        Still have questions?
      </h3>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6">
        Can't find the answer you're looking for? Please chat with our friendly
        team.
      </p>

      {/* Button */}
      <button className="bg-red-500 text-white text-sm sm:text-base font-medium px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg shadow-md hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2">
        Get in touch
      </button>
    </div>
  );
};

export default SupportCTA;
