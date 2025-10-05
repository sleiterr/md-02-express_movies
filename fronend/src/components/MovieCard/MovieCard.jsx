import React from "react";

const MovieCard = ({ movie }) => {
  //   const poster = movie.poster;
  return (
    <div className="flex flex-col justify-center cursor-pointer">
      <img src={movie.poster} alt={movie.title} className="h-[30rem] w-auto" />
      <div className="py-6 px-2">
        <h3 className="font-normal text-title-card text-lg tracking-wider">
          {movie.title}
        </h3>{" "}
        <div className="flex flex-row items-center gap-4 mt-1">
          {/*Movies title */}
          {movie.genres && (
            <p className="text-base text-card-subtitle relative after:absolute after:content-[''] after:-right-2 after:top-1 after:bg-neutral-500 after:w-[1px] after:h-5">
              {movie.runtime} min
            </p>
          )}
          <div className="flex items-center gap-2">
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
    </div>
  );
};

export default MovieCard;
