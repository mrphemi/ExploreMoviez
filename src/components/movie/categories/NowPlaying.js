import React, { useEffect } from "react";
import baseUrl from "../../../api";

import { fetchNowPlaying } from "../../../actions/movie";
import useFetchCategory from "./useFetchCategory";

import MovieList from "../list/MovieList";

import "./categories.scss";

const NowPlaying = () => {
  useFetchCategory(fetchNowPlaying);

  return (
    <>
      <h2 className="heading">now playing</h2>
      <MovieList />
    </>
  );
};

export default NowPlaying;
