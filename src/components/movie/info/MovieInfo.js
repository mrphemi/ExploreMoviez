import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Details from "./Details";
import SimilarMovies from "./SimilarMovies";
import Poster from "../poster/Poster";

import { fetchMovie } from "../../../actions/movie";

import { getMovie } from "../../../actions/actionCreators";

import styles from "./MovieInfo.module.scss";

const MovieInfo = () => {
  const dispatch = useDispatch();
  const movieInfo = useSelector(state => state.movies.movie);
  const clean = () => dispatch(getMovie({}));
  const { movieID } = useParams();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
    dispatch(fetchMovie(movieID));
    return () => {
      clean();
    };
  }, [movieID]);

  const { genres = [] } = movieInfo;
  return (
    <>
      {movieInfo && genres && (
        <>
          <div className={styles.info_wrapper}>
            <div className={styles.movie_img}>
              <Poster
                size="original"
                poster_path={movieInfo.poster_path}
                alt={movieInfo.title}
                height="50rem"
              />
            </div>
            <Details info={movieInfo} genres={genres} />
          </div>
          <SimilarMovies movieId={movieID} />
        </>
      )}
    </>
  );
};

export default MovieInfo;
