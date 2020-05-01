import baseUrl from "../api";

import {
  getMovies,
  getMovie,
  getGenres,
  fetching,
  fetched,
} from "./actionCreators";

const api_key = process.env.REACT_APP_API_KEY;

// Search for movie
export const searchMovie = (page_no = 1, query) => (dispatch) => {
  dispatch(fetching());
  baseUrl
    .get("/search/movie", {
      params: { page: page_no, query: query, api_key: api_key },
    })
    .then((result) => {
      dispatch(getMovies(result.data));
      dispatch(fetched());
    })
    .catch((err) => console.log(err));
};

// Get top movies
export const fetchTopRated = (page_no = 1) => (dispatch) => {
  dispatch(fetching());
  baseUrl
    .get("/movie/top_rated", { params: { page: page_no, api_key: api_key } })
    .then((result) => {
      dispatch(getMovies(result.data));
      dispatch(fetched());
    })
    .catch((err) => console.log(err));
};

// Get popular movies
export const fetchPopular = (page_no = 1) => (dispatch) => {
  dispatch(fetching());
  baseUrl
    .get("/movie/popular", { params: { page: page_no, api_key: api_key } })
    .then((result) => {
      dispatch(getMovies(result.data));
      dispatch(fetched());
    })
    .catch((err) => console.log(err));
};

// Get upcoming movies
export const fetchUpcoming = (page_no = 1) => (dispatch) => {
  dispatch(fetching());
  baseUrl
    .get("/movie/upcoming", { params: { page: page_no, api_key: api_key } })
    .then((result) => {
      dispatch(getMovies(result.data));
      dispatch(fetched());
    })
    .catch((err) => console.log(err));
};

// Get now playing movies
export const fetchNowPlaying = (page_no = 1) => (dispatch) => {
  dispatch(fetching());
  baseUrl
    .get("/movie/now_playing", {
      params: { page: page_no, api_key: api_key },
    })
    .then((result) => {
      dispatch(getMovies(result.data));
      dispatch(fetched());
    })
    .catch((err) => console.log(err));
};

// Get list of movie genres with their respective ids
export const fetchAllGenres = () => (dispatch) => {
  baseUrl
    .get("/genre/movie/list", { params: { api_key: api_key } })
    .then((result) => {
      dispatch(getGenres(result.data.genres));
    })
    .catch((err) => console.log(err));
};

// Get movie details
export const fetchMovie = (id) => (dispatch) => {
  dispatch(fetching());
  baseUrl
    .get(`/movie/${id}?append_to_response=credits,images`, {
      params: { api_key: api_key },
    })
    .then((result) => {
      dispatch(getMovie(result.data));
      dispatch(fetched());
    })
    .catch((err) => console.log(err));
};

// Get Similar movies
export const fetchSimilarMovies = (page_no = 1, id) => (dispatch) => {
  dispatch(fetching());
  baseUrl
    .get(`/movie/${id}/similar`, {
      params: { page: page_no, api_key: api_key },
    })
    .then((result) => {
      dispatch(getMovies(result.data));
      dispatch(fetched());
    })
    .catch((err) => console.log(err));
};

// Get Similar movies
export const fetchMoviesByGenres = (page_no = 1, genreId) => (dispatch) => {
  dispatch(fetching());
  baseUrl
    .get("/discover/movie", {
      params: { page: page_no, with_genres: genreId, api_key: api_key },
    })
    .then((result) => {
      dispatch(getMovies(result.data));
      dispatch(fetched());
    })
    .catch((err) => console.log(err));
};
