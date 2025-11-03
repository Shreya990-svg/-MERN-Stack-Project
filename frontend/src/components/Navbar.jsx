import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition-colors">
          📚 BookStore
        </Link>

        <div className="flex gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-200 transition-colors">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;