import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { MdDeleteForever } from "react-icons/md";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error deleting book", { variant: "error" });
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white p-6">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl text-center hover:shadow-red-600/30 transition-all duration-300">
        <BackButton />

        <h1 className="text-4xl font-bold text-red-400 mt-4 mb-6 tracking-wide">
          Delete Book
        </h1>

        {loading ? (
          <Spinner />
        ) : (
          <>
            <MdDeleteForever className="text-6xl text-red-500 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl text-gray-200 mb-6">
              Are you sure you want to permanently delete this book?
            </h3>

            <button
              onClick={handleDeleteBook}
              className="w-full py-3 rounded-xl text-lg font-semibold bg-gradient-to-r from-red-600 to-pink-700 hover:from-red-700 hover:to-pink-800 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Yes, Delete this Book
            </button>

            <p className="mt-4 text-sm text-gray-400 italic">
              This action cannot be undone.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DeleteBook;
