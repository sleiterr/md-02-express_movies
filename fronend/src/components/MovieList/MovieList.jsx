import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return <p className={s.empty}>No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-8">
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
