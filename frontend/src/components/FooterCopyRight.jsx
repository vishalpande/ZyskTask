import React from "react";

const FooterCopyRight = () => {
  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-12 space-y-4 md:space-y-0">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <span className="text-red-500 font-inter font-bold text-2xl sm:text-3xl tracking-tight">
            zy
          </span>
          <span className="text-red-500 font-bold font-inter text-xl sm:text-2xl tracking-tight">
            Sk
          </span>
        </div>

        {/* Copyright Section */}
        <div className="text-center md:text-right">
          <p className="text-gray-500 text-sm sm:text-base font-inter">
            © 2077 zysktechnologies. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyRight;
