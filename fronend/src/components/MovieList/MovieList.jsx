import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return <p className={s.empty}>No movies found.</p>;
  }

  return (
    <div className={s.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
