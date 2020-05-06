import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import MovieItem from "./MovieItem";
import Pagination from "./Pagination";
import EmptyList from "./EmptyList";

import styles from "./MovieList.module.scss";

const MovieList = () => {
  const movieList = useSelector((state) => state.movies.movies.list);

  // Create ref for movies list
  const listRef = useRef(null);

  // scroll to top
  const scrollToTop = () => {
    // window.scrollTo(0, this.listRef.current.offsetTop - 100);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, [movieList]);

  return (
    <>
      {movieList.length ? (
        <>
          <div className={styles.wrapper} ref={listRef}>
            {movieList.map((movie) => (
              <MovieItem key={movie.id} details={movie} />
            ))}
          </div>
          <Pagination />
        </>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default MovieList;
