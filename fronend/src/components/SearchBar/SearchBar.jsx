import React from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={s.container}>
      <input
        type="text"
        placeholder="Search movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={s.input}
      />
    </div>
  );
};

export default SearchBar;
