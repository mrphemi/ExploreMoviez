import { GET_MOVIES, GET_GENRES, GET_MOVIE, FETCHING, FETCHED } from "./types";

// Movies
export const getMovies = movies => {
  const { total_pages, page, results } = movies;
  return {
    type: GET_MOVIES,
    info: {
      page,
      total_pages,
      list: results
    }
  };
};

export const getGenres = genres => {
  return {
    type: GET_GENRES,
    genres
  };
};

export const getMovie = movie => {
  return {
    type: GET_MOVIE,
    movie
  };
};

// Loader
// Set loader state to true
export const fetching = () => ({
  type: FETCHING
});

// Set loader state to false
export const fetched = () => ({
  type: FETCHED
});
