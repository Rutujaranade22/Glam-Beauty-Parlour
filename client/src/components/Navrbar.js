import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <HashLink smooth to="/#about" className="hover:text-pink-600">About</HashLink>
          <Link to="/services" className="hover:text-pink-600">Services</Link>
          <Link to="/login" className="hover:text-pink-600">Login</Link>
          <Link to="/signup" className="hover:text-pink-600">Signup</Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          {/* Call Now Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-pink-600 text-white rounded-xl shadow hover:bg-pink-800 transition"
          >
            Call Now
          </button>

          <Link
            to="/mybookings"
            className="px-4 py-2 bg-white text-pink-800 border rounded-xl shadow hover:bg-pink-100 transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Call Now Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
            <h2 className="text-xl font-bold mb-4 text-pink-600">
              Contact Glam Beauty Parlour
            </h2>
            <p className="mb-2">📞 Phone: +91 9822467751</p>
            <p className="mb-4">⏰ Hours: 10 AM – 8 PM</p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+919822467751"
                className="px-4 py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition"
              >
                📞 Call Us
              </a>
              <a
                href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
              >
                💬 WhatsApp
              </a>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
