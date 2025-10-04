import React from "react";
import s from "./Pagination.module.css";

const Pagination = ({ page, setPage, totalPages }) => {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className={s.container}>
      <button onClick={handlePrev} disabled={page === 1} className={s.button}>
        Prew
      </button>

      <span className={s.page}>
        Page {page} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className={s.button}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
