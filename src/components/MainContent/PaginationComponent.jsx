import React from "react";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="bg-[#F7F7F9] rounded-sm text-center max-[350px]:">
      {pageNumbers.map((pageNumber) => {
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`px-6  py-4 cursor-pointer ${
              currentPage === pageNumber ? "bg-[#40BFFF] text-white" : ""
            }`}>
            {pageNumber}
          </button>
        );
      })}
  
    </div>
  );
};

export default PaginationComponent;
