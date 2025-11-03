import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex items-center">
      <Link
        to={destination}
        className="flex items-center gap-2 bg-gradient-to-r from-sky-700 to-sky-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:from-sky-600 hover:to-sky-400 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <BsArrowLeft className="text-xl" />
        <span className="font-medium hidden sm:inline">Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
