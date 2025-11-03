import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-4 border border-white/20">
      <table className="w-full text-sm text-gray-200">
        <thead>
          <tr className="bg-white/20 text-gray-100 uppercase text-xs tracking-wider">
            <th className="px-4 py-3 border border-white/20 rounded-tl-xl">No</th>
            <th className="px-4 py-3 border border-white/20">Title</th>
            <th className="px-4 py-3 border border-white/20 max-md:hidden">
              Author
            </th>
            <th className="px-4 py-3 border border-white/20 max-md:hidden">
              Publish Year
            </th>
            <th className="px-4 py-3 border border-white/20 rounded-tr-xl max-md:hidden">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className="hover:bg-white/10 transition-all duration-200 border-b border-white/10"
            >
              <td className="px-4 py-3 text-center">{index + 1}</td>
              <td className="px-4 py-3 text-center font-medium text-gray-100">
                {book.title}
              </td>
              <td className="px-4 py-3 text-center max-md:hidden text-gray-300">
                {book.author}
              </td>
              <td className="px-4 py-3 text-center max-md:hidden text-gray-300">
                {book.publishYear}
              </td>

              {/* Action Buttons */}
              <td className="px-4 py-3 text-center">
                <div className="flex justify-center items-center gap-5">
                  <Link
                    to={`/books/details/${book._id}`}
                    className="text-green-400 hover:text-green-200 transition-transform hover:scale-110"
                  >
                    <BsInfoCircle size={22} />
                  </Link>
                  <Link
                    to={`/books/edit/${book._id}`}
                    className="text-yellow-400 hover:text-yellow-200 transition-transform hover:scale-110"
                  >
                    <AiOutlineEdit size={22} />
                  </Link>
                  <Link
                    to={`/books/delete/${book._id}`}
                    className="text-red-400 hover:text-red-200 transition-transform hover:scale-110"
                  >
                    <MdOutlineDelete size={22} />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
