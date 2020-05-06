import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { fetchSimilarMovies } from "../../../actions/movie";

import MovieList from "../list/MovieList";

import styles from "./Similar.module.scss";

const SimilarMovies = ({ movieId }) => {
  const dispatch = useDispatch();
  const { page } = queryString.parse(useLocation().search);

  useEffect(() => {
    dispatch(fetchSimilarMovies(page, movieId));
  }, [page, movieId]);

  return (
    <div className={styles.similar}>
      <h1 className={styles.heading}>similar movies</h1>
      <MovieList />
    </div>
  );
};

SimilarMovies.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default SimilarMovies;
