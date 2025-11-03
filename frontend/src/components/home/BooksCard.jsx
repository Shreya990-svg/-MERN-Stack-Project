import React from 'react';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div className="px-6 py-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        📚 Our Book Collection
      </h2>

      {books.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No books available yet.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((item) => (
            <BookSingleCard key={item._id} book={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksCard;
