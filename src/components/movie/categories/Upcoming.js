import React from "react";

import { fetchUpcoming } from "../../../actions/movie";
import useFetchCategory from "./useFetchCategory";

import MovieList from "../list/MovieList";

import "./categories.scss";

const Upcoming = () => {
  useFetchCategory(fetchUpcoming);

  return (
    <>
      <h2 className="heading">Upcoming movies</h2>
      <MovieList />
    </>
  );
};

export default Upcoming;
