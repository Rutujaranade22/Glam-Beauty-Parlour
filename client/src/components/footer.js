import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative mt-1 text-white overflow-hidden">
      {/* Gradient Background - Soft Pink Shades */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-400"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-pink-900">Glam Beauty</h2>
          <p className="mt-2 text-gray-800 text-sm">
            Premium beauty parlour offering professional services to enhance 
            your beauty & style. Book your appointment today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-pink-900">Quick Links</h3>
          <ul className="space-y-2 text-gray-800">
            <li><Link to="/" className="hover:text-pink-600 transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-pink-600 transition">Services</Link></li>
            <li><Link to="/about" className="hover:text-pink-600 transition">About</Link></li>
            <li><Link to="/gallery" className="hover:text-pink-600 transition">Gallery</Link></li>
            <li><Link to="/bookings" className="hover:text-pink-600 transition">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-pink-900">Contact Us</h3>
          <p className="text-gray-800">📍 Pune, Maharashtra, India</p>
          <p className="text-gray-800">📞 +91 98765 43210</p>
          <p className="text-gray-800">✉️ glambeauty@gmail.com</p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-pink-600 transition">🌐</a>
            <a href="#" className="hover:text-pink-600 transition">📘</a>
            <a href="#" className="hover:text-pink-600 transition">📸</a>
            <a href="#" className="hover:text-pink-600 transition">🐦</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-pink-300 mt-6 pt-4 text-center text-gray-800 text-sm">
        © {new Date().getFullYear()} Glam Beauty Parlour. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
