import React from "react";

import { fetchPopular } from "../../../actions/movie";
import useFetchCategory from "./useFetchCategory";

import MovieList from "../list/MovieList";

import "./categories.scss";
const Popular = () => {
  useFetchCategory(fetchPopular);

  return (
    <>
      <h2 className="heading">popular movies</h2>
      <MovieList />
    </>
  );
};

export default Popular;
