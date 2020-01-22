import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { fetchMoviesByGenres } from "../../../actions/movie";

import MovieList from "../list/MovieList";

// List movies by genres
const ListByGenres = () => {
  const dispatch = useDispatch();
  const genres = useSelector(state => state.movies.genres);
  const { genreId } = useParams();
  const { page } = queryString.parse(useLocation().search);

  const { name } = genres.filter(genre => parseInt(genre.id) === parseInt(genreId))[0];

  useEffect(() => {
    dispatch(fetchMoviesByGenres(page, genreId));
  }, [page, genreId]);

  return (
    <>
      <h2 className="heading">{`Showing ${name} movies`}</h2>
      <MovieList />
    </>
  );
};

export default ListByGenres;
