import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    publishYear: "",
    image: "",
    context: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/books", form);
      navigate("/");
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 transition-all duration-300 hover:shadow-sky-600/30 hover:scale-[1.02]">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent tracking-wide">
          Add a New Book 📚
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block mb-1 text-sky-200 font-medium">
              Title
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter book title"
              required
              className="w-full rounded-xl bg-slate-900/60 border border-sky-700 text-white px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-sky-400 outline-none transition"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block mb-1 text-sky-200 font-medium">
              Author
            </label>
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Enter author name"
              required
              className="w-full rounded-xl bg-slate-900/60 border border-sky-700 text-white px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-sky-400 outline-none transition"
            />
          </div>

          {/* Publish Year */}
          <div>
            <label className="block mb-1 text-sky-200 font-medium">
              Publish Year
            </label>
            <input
              name="publishYear"
              value={form.publishYear}
              onChange={handleChange}
              placeholder="Enter publish year"
              type="number"
              required
              className="w-full rounded-xl bg-slate-900/60 border border-sky-700 text-white px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-sky-400 outline-none transition"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 text-sky-200 font-medium">
              Image URL
            </label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              required
              className="w-full rounded-xl bg-slate-900/60 border border-sky-700 text-white px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-sky-400 outline-none transition"
            />
          </div>

          {/* Context / Description */}
          <div>
            <label className="block mb-1 text-sky-200 font-medium">
              Context
            </label>
            <textarea
              name="context"
              value={form.context}
              onChange={handleChange}
              placeholder="Enter book description or summary"
              required
              rows="4"
              className="w-full rounded-xl bg-slate-900/60 border border-sky-700 text-white px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-sky-400 outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 w-full py-3 rounded-xl text-lg font-semibold bg-gradient-to-r from-sky-500 to-blue-700 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Save Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBook;
