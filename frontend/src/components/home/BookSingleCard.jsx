import { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={book._id}
      className="relative m-4 p-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-gray-200"
    >
      {/* Publish Year Badge */}
      <span className="absolute top-3 right-3 px-3 py-1 text-sm bg-red-500/30 text-red-100 rounded-full font-semibold shadow-sm">
        {book.publishYear}
      </span>

      {/* ID */}
      <h4 className="text-xs text-gray-400 mb-2">ID: {book._id}</h4>

      {/* Book Info */}
      <div className="flex items-center gap-2 mb-2">
        <PiBookOpenTextLight className="text-blue-300 text-xl" />
        <h2 className="text-lg font-semibold tracking-wide">{book.title}</h2>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <BiUserCircle className="text-green-300 text-xl" />
        <h3 className="text-base font-medium">{book.author}</h3>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-5 mt-4">
        <BiShow
          className="text-3xl text-blue-400 hover:text-blue-200 cursor-pointer transition-transform hover:scale-110"
          onClick={() => setShowModal(true)}
        />

        <Link
          to={`/books/details/${book._id}`}
          className="text-2xl text-green-400 hover:text-green-200 transition-transform hover:scale-110"
        >
          <BsInfoCircle />
        </Link>

        <Link
          to={`/books/edit/${book._id}`}
          className="text-2xl text-yellow-400 hover:text-yellow-200 transition-transform hover:scale-110"
        >
          <AiOutlineEdit />
        </Link>

        <Link
          to={`/books/delete/${book._id}`}
          className="text-2xl text-red-400 hover:text-red-200 transition-transform hover:scale-110"
        >
          <MdOutlineDelete />
        </Link>
      </div>

      {/* Modal */}
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;
