import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import React from "react";
function EditBook() {
  const [form, setForm] = useState({ title: "", author: "", publishYear: "" });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => setForm(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/books/${id}`, form);
    navigate("/");
  };

  if (loading) return <Spinner />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white p-6">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-sky-600/30 transition-all duration-300">
        <BackButton />

        <div className="flex items-center justify-center gap-3 mb-6">
          <AiFillEdit className="text-4xl text-sky-400 animate-pulse" />
          <h2 className="text-4xl font-bold text-sky-400 tracking-wide">
            Edit Book
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Book Title"
              className="w-full rounded-lg bg-slate-800/60 border border-sky-700 text-white px-4 py-2 focus:ring-2 focus:ring-sky-400 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Author</label>
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Author Name"
              className="w-full rounded-lg bg-slate-800/60 border border-sky-700 text-white px-4 py-2 focus:ring-2 focus:ring-sky-400 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Publish Year
            </label>
            <input
              name="publishYear"
              value={form.publishYear}
              onChange={handleChange}
              placeholder="Publish Year"
              className="w-full rounded-lg bg-slate-800/60 border border-sky-700 text-white px-4 py-2 focus:ring-2 focus:ring-sky-400 outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-sky-500 to-sky-700 text-white py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg hover:shadow-sky-700/30 transition-transform duration-300"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditBook;
