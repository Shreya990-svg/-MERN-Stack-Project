import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((res) => setBooks(res.data.data)) // ✅ fixed here
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
          📚 Book Store
        </h1>

        <Link
          to="/books/create"
          className="bg-gradient-to-r from-sky-500 to-blue-700 px-5 py-2.5 rounded-xl font-medium text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          + Add Book
        </Link>
      </div>

      {/* Books Grid */}
      {Array.isArray(books) && books.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <motion.div
              key={book._id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-sky-600/30"
              whileHover={{ y: -5 }}
            >
              {/* Optional image */}
              {book.image && (
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}

              <h3 className="text-2xl font-semibold text-sky-300 mb-2">
                {book.title}
              </h3>
              <p className="text-gray-300 text-lg mb-1">
                <span className="font-medium text-sky-200">Author:</span>{" "}
                {book.author}
              </p>
              <p className="text-sm text-gray-400 mb-3">
                <span className="font-medium text-sky-200">Year:</span>{" "}
                {book.publishYear}
              </p>

              {/* Optional context */}
              {book.context && (
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 italic">
                  “{book.context}”
                </p>
              )}

              <div className="flex gap-4 mt-4">
                <Link
                  to={`/books/details/${book._id}`}
                  className="text-sky-400 hover:text-sky-300 transition"
                >
                  View
                </Link>
                <Link
                  to={`/books/edit/${book._id}`}
                  className="text-green-400 hover:text-green-300 transition"
                >
                  Edit
                </Link>
                <Link
                  to={`/books/delete/${book._id}`}
                  className="text-red-400 hover:text-red-300 transition"
                >
                  Delete
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center mt-20 text-lg">
          No books available. Try adding one!
        </p>
      )}
    </div>
  );
}

export default Home;
