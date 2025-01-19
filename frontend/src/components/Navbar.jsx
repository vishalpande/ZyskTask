import React from "react";
import Avatar from "../assets/Avatar.png";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="border-b-2 border-gray-200">
      <nav className="flex justify-between items-center py-4 px-6 sm:px-10 lg:px-20 bg-white">
        {/* Logo and Menu Items */}
        <div className="flex items-center space-x-6 lg:space-x-12">
          {/* Logo */}
          <div className="text-red-500 text-2xl sm:text-3xl font-bold">zysk</div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 text-gray-800 text-sm sm:text-base font-medium">
            <a href="#" className="hover:text-gray-600">
              Home
            </a>
            <div className="relative group">
              <a href="#" className="flex items-center hover:text-gray-600">
                Products <span className="ml-1">&#9662;</span>
              </a>
              {/* Dropdown */}
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Product 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Product 2
                </a>
              </div>
            </div>
            <div className="relative group">
              <a href="#" className="flex items-center hover:text-gray-600">
                Resources <span className="ml-1">&#9662;</span>
              </a>
              {/* Dropdown */}
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Resource 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Resource 2
                </a>
              </div>
            </div>
            <a href="#" className="hover:text-gray-600">
              Pricing
            </a>
          </div>
        </div>

          {/* Mobile Menu Button and Avatar */}
          <div className="flex items-center space-x-4">
          <button onClick={toggleMobileMenu} className="md:hidden flex items-center">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
      

          {/* Avatar */}
          <div className="hidden md:block w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
            <img src={Avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-10 right-0 bg-white shadow-lg w-2/3 py-4 px-6 rounded-lg text-gray-800">
            <a href="#" className="block mb-2 hover:text-gray-600">Home</a>
            <a href="#" className="block mb-2 hover:text-gray-600">Products</a>
            <a href="#" className="block mb-2 hover:text-gray-600">Resources</a>
            <a href="#" className="block hover:text-gray-600">Pricing</a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
