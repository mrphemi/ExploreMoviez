import React from "react";
import PropTypes from "prop-types";

import Cast from "./Cast";

import styles from "./MovieInfo.module.scss";

const Details = ({ info, genres }) => {
  const { title, tagline, original_language, runtime, release_date, overview, credits = {} } = info;
  const { cast = [] } = credits;
  return (
    <div className={styles.movie_details}>
      <div className={styles.movie_title}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.tagline}>{tagline}</h3>
      </div>
      <p className={styles.lang}>
        <strong>Languages:</strong> {original_language}
      </p>
      <p className={styles.runtime}>
        <strong>Runtime:</strong> {runtime}mins
      </p>
      <p className={styles.released_date}>
        <strong>Released:</strong> {release_date}
      </p>
      {genres.length && (
        <div className="genres">
          <h3>genres</h3>
          {genres.map(genre => (
            <span className={styles.genre} key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>
      )}
      <div className={styles.overview}>
        <h3>synopsis</h3>
        <p>{overview}</p>
      </div>
      <Cast cast={cast} />
    </div>
  );
};

Details.propTypes = {
  info: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired
};

export default Details;
