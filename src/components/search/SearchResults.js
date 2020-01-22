import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import queryString from "query-string";

import { searchMovie } from "../../actions/movie";

import MovieList from "../movie/list/MovieList";

const SearchResults = ({ location, match }) => {
  const dispatch = useDispatch();
  const { page } = queryString.parse(location.search);
  const { query } = match.params;

  useEffect(() => {
    dispatch(searchMovie(page, query));
  }, [query, page]);

  return (
    <>
      <h2 className="heading">{`Search Results for "${query}"`}</h2>
      <MovieList />
    </>
  );
};

export default SearchResults;
