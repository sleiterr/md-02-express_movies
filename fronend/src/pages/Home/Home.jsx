import React, { useState, useEffect } from "react";
import { fetchMovies, searchMovies } from "../../utils/api";

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
    <div className="app">
      <h1 className="title">Movie App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? (
        <p className="loading">Loading movies...</p>
      ) : (
        <MoviList movies={movies} />
      )}
      {!searchTerm && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </div>
  );
};

export default Home;
