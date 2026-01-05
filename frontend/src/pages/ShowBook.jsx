import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { FiBookOpen } from "react-icons/fi";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://mern-stack-project-bnty.onrender.com/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <BackButton />
          <h1 className="text-3xl font-semibold text-sky-400 flex items-center gap-3">
            <FiBookOpen className="text-4xl" /> Book Details
          </h1>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-sky-500/30 transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-6 text-gray-200">
              <div>
                <p className="text-gray-400 text-sm mb-1">📕 Book ID</p>
                <p className="text-lg font-medium break-all">{book._id}</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">📘 Title</p>
                <p className="text-xl font-semibold text-sky-300">
                  {book.title}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">👤 Author</p>
                <p className="text-lg">{book.author}</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">📅 Publish Year</p>
                <p className="text-lg">{book.publishYear}</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">🕒 Created At</p>
                <p className="text-sm text-gray-300">
                  {book.createdAt
                    ? new Date(book.createdAt).toLocaleString()
                    : "—"}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">🔄 Updated At</p>
                <p className="text-sm text-gray-300">
                  {book.updatedAt
                    ? new Date(book.updatedAt).toLocaleString()
                    : "—"}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ShowBook;
