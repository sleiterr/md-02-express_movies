import React from "react";

const MovieCard = ({ movie }) => {
  //   const poster = movie.poster;
  return (
    <div className="">
      <img src={movie.poster} alt={movie.title} className="h-[30rem]" />
      <div className="py-6">
        <h3 className="font-normal text-title-card text-lg tracking-wider">
          {movie.title}
        </h3>{" "}
        <div className="flex flex-row items-center gap-4 mt-1">
          {/*Movies title */}
          {movie.genres && (
            <p className="text-base text-card-subtitle">{movie.runtime} min</p>
          )}
          {movie.genres && (
            <p className="text-base text-card-subtitle">{movie.genres[0]},</p>
          )}
          {movie.genres && (
            <p className="text-base text-card-subtitle">{movie.genres[1]}</p>
          )}
          {/*Movies genres */}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
