import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-md shadow-md rounded-b-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-pink-600 text-2xl font-bold">✦</span>
          <span className="text-xl font-semibold text-gray-800">
            Glam Beauty <span className="text-pink-800">Premium Parlour</span>
          </span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-pink-600">Home</Link>
          <Link to="/services" className="hover:text-pink-600">Services</Link>
          <Link to="/about" className="hover:text-pink-600">About</Link>
          <Link to="/gallery" className="hover:text-pink-600">Gallery</Link>
          <Link to="/login" className="hover:text-pink-600">Login</Link>
          <Link to="/signup" className="hover:text-pink-600">Signup</Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-pink-600 text-white rounded-xl shadow hover:bg-pink-800 transition">
            Call Now
          </button>
           <Link
  to="/mybookings" className="px-4 py-2 bg-white text-pink-800 border rounded-xl shadow hover:bg-pink-100 transition">
            Book Appointment
          </Link>
         

        </div>
      </div>
      </nav>
  );
};

export default Navbar;
