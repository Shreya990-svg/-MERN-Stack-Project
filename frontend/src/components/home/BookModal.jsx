import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90%] max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 text-white transition-transform duration-300 hover:scale-[1.01]"
      >
        {/* Close Icon */}
        <AiOutlineClose
          className="absolute right-4 top-4 text-2xl text-red-400 hover:text-red-600 cursor-pointer transition-all"
          onClick={onClose}
        />

        {/* Publish Year */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-4 py-1 bg-red-500/20 text-red-200 text-sm font-medium rounded-full shadow-sm">
            {book.publishYear}
          </span>
          <span className="text-xs text-gray-300">#{book._id}</span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-2 mt-2">
          <PiBookOpenTextLight className="text-2xl text-blue-300" />
          <h2 className="text-xl font-semibold text-gray-100 tracking-wide">
            {book.title}
          </h2>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 mt-3">
          <BiUserCircle className="text-2xl text-green-300" />
          <p className="text-lg text-gray-200 font-medium">{book.author}</p>
        </div>

        {/* Description */}
        <p className="mt-5 text-gray-300 leading-relaxed text-sm italic">
          “A beautifully crafted book that leaves a lasting impression.”
        </p>

        {/* Link & Image */}
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5">
          <a
            href={book.context || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 rounded-lg text-sm font-medium transition-all"
          >
            🔗 Get Book Link
          </a>
          {book.image ? (
            <img
              src={book.image}
              alt={book.title}
              className="w-40 h-52 object-cover rounded-xl shadow-md border border-white/20"
            />
          ) : (
            <div className="w-40 h-52 rounded-xl bg-gray-500/30 flex items-center justify-center text-gray-300 text-sm">
              No Image
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookModal;
