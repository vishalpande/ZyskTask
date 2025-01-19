import React from "react";
import hero from '../assets/Hero.png';

const Hero = () => {
  return (
    <div className="bg-white text-center py-12 px-6 sm:py-16 sm:px-8 md:py-20 lg:py-24 lg:px-32">
      {/* New Feature Announcement */}
      <div className="flex justify-center items-center mb-6">
        <div className="inline-flex items-center bg-red-50 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
          <span className="bg-white border border-red-600 rounded-full px-2 py-0.5 mr-2 text-[12px] sm:text-[14px] uppercase">
            New feature
          </span>
          <span className="text-[12px] sm:text-[14px]">
            Check out the team dashboard →
          </span>
        </div>
      </div>

      {/* Hero Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
        Beautiful analytics to grow smarter
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <button className="flex items-center px-6 py-3 text-gray-900 border border-gray-300 rounded-full font-medium hover:bg-gray-100 transition">
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3.87v16.26c0 .83.9 1.34 1.61.89l12.12-8.13c.64-.43.64-1.35 0-1.78L6.61 2.98A1.02 1.02 0 0 0 5 3.87z" />
          </svg>
          Demo
        </button>
        <button className="px-6 py-3 text-white bg-red-500 rounded-full font-medium hover:bg-red-600 transition">
          Sign up
        </button>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto mt-10">
        <img
          src={hero}
          alt="Responsive Illustration"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
