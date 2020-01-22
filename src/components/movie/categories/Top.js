import React from "react";

import { fetchTopRated } from "../../../actions/movie";
import useFetchCategory from "./useFetchCategory";

import MovieList from "../list/MovieList";

import "./categories.scss";

const TopRated = () => {
  useFetchCategory(fetchTopRated);
  return (
    <>
      <h2 className="heading">top rated movies</h2>
      <MovieList />
    </>
  );
};

export default TopRated;
