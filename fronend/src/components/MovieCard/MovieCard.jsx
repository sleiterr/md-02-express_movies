import React from "react";
import s from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  //   const poster = movie.poster;
  return (
    <div className={s.card}>
      <img src={movie.poster} alt={movie.title} className={s.poster} />
      <div className={s.info}>
        <h3 className={s.title}>{movie.title}</h3>
        <p className={s.text}>Plot: {movie.plot}</p>
        {movie.year && <p className={s.text}>Year: {movie.year}</p>}
        {movie.genres && <p className={s.text}>Genres: {movie.year}</p>}
      </div>
    </div>
  );
};

export default MovieCard;
