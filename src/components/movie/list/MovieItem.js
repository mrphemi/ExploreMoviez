import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Poster from "../poster/Poster";

import styles from "./MovieItem.module.scss";

const Movie = ({ details }) => {
  return (
    <div className={styles.movie}>
      {details && (
        <Link to={`/movie/${details.id}`}>
          <Poster
            size="w500"
            poster_path={details.poster_path}
            alt={details.title}
            height="45rem"
          />
          <span className={styles.rating}>{details.vote_average}</span>
          <p className={styles.title}>{details.title}</p>
        </Link>
      )}
    </div>
  );
};

Movie.propTypes = {
  details: PropTypes.object.isRequired
};

export default Movie;
