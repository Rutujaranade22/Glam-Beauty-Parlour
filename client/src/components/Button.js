import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, type = "button", to, onClick }) => {
  if (to) {
    return (
      <Link
        to={to}
        className="w-full block text-center bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
    >
      {children}
    </button>
  );
};

export default Button;
