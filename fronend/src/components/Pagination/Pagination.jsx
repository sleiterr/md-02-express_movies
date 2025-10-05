import React from "react";
import { PaginationBtn } from "./PaginationBtn";

const Pagination = ({ page, setPage, totalPages }) => {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="flex flex-row items-center gap-6 mt-12">
      <PaginationBtn handlePrev={handlePrev} page={page}>
        <p className="font-normal text-base/6 text-primary">Prew</p>
      </PaginationBtn>
      
      <PaginationCounter page={page} totalPages={totalPages} />
      
      <PaginationBtn
        handleNext={handleNext}
        page={page}
        totalPages={totalPages}
      >
        <p className="font-normal text-base/6 text-primary">Next</p>
      </PaginationBtn>
    </div>
  );
};

export default Pagination;

const PaginationCounter = ({ page, totalPages }) => {
  return (
    <div className="flex items-center gap-2.5 font-normal text-base/6 text-primary">
      <p>Page {page}</p> of <p>{totalPages}</p>
    </div>
  );
};
