import React from "react";

export const PaginationBtn = ({
  handlePrev,
  handleNext,
  page,
  totalPages,
  children,
}) => {
  return (
    <>
      {handlePrev && (
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-6 py-1.5 shadow-inner shadow-white/10 focus:outline-none focus:outline focus:outline-white hover:bg-gray-600 transition-colors duration-300 cursor-pointer"
        >
          {children}
        </button>
      )}
      {handleNext && (
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-6 py-1.5 shadow-inner shadow-white/10 focus:outline-none focus:outline focus:outline-white hover:bg-gray-600 transition-colors duration-300 cursor-pointer"
        >
          {children}
        </button>
      )}
    </>
  );
};
