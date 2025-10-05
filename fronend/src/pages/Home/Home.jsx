import React, { useState, useEffect } from "react";
import { fetchMovies, searchMovies } from "../../utils/api";

import Hero from "../../components/Hero/Hero";
import MoviList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadMovie = async () => {
      setLoading(true);

      let data;
      if (searchTerm) {
        data = await searchMovies(searchTerm, page);
        setMovies(data.movies || []);
        setTotalPages(data.totalPages || 1);
      } else {
        data = await fetchMovies(page);
        setMovies(data.movies || []);
        setTotalPages(data.totalPages || 1);
      }
      setLoading(false);
    };

    loadMovie();
  }, [page, searchTerm]);

  return (
    <main>
      <Hero />
      <section className="">
        <div className="py-[8rem] mx-auto md:max-w-7xl">
          <div className="relative after:absolute after:content-[''] after:bg-red-500 after:-bottom-3 after:w-[20rem] after:h-[0.04em]">
            <h4 className="font-normal text-3xl text-primary">Movie App</h4>
          </div>
          <div className="py-8 w-full flex justify-end items-center">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div className="flex flex-col items-center mt-8">
            {loading ? (
              <p className="font-normal text-">Loading movies...</p>
            ) : (
              <div className="">
                <MoviList movies={movies} />
              </div>
            )}
            {!searchTerm && (
              <Pagination
                page={page}
                setPage={setPage}
                totalPages={totalPages}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
