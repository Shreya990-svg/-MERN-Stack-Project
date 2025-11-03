import React from "react";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-transparent border-t-sky-600 border-l-sky-400 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-6 h-6 bg-sky-500 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
