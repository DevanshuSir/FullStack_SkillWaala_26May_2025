import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-600">ShopLogo</span>
          </div>
          {/* Center: Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </a>
          </div>
          {/* Right: Cart Icon */}
          <div className="flex items-center">
            <button className="relative text-gray-700 hover:text-blue-600">
              <FaShoppingCart size={24} />
              {/* Example badge for cart items */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                6
              </span>
            </button>
            {/* Mobile menu button */}
            <div className="md:hidden ml-4">
              <button
                type="button"
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                onClick={() => {
                  const menu = document.getElementById("mobile-menu");
                  menu.classList.toggle("hidden");
                }}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow">
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
            Products
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;