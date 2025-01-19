import React from "react";

const FreeTrialSection = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 sm:py-16 sm:px-8 md:py-20 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl mb-4">
          Start your free trial
        </h2>
        {/* Subheading */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <button className="w-full sm:w-auto px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition">
            Learn more
          </button>
          <button className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialSection;
