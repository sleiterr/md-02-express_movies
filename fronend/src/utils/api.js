const BASE_URL = "http://localhost:3000";

export const fetchMovies = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/movies/page/${page}`);
  return res.json();
};

export const searchMovies = async (title, page = 1) => {
  const res = await fetch(`${BASE_URL}/movies/search/${title}?page=${page}`);
  return res.json();
};
