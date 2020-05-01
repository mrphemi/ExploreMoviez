import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  Popular,
  NowPlaying,
  TopRated,
  Upcoming,
} from "../components/movie/categories";

import MovieInfo from "./movie/info/MovieInfo";
import Nav from "./nav/Nav";
import Loader from "./loader/Loader";
import Results from "./search/SearchResults";
import Genres from "./movie/genres/Genres";

const App = () => {
  return (
    <>
      <Loader />
      <div>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={NowPlaying} />
            <Route exact path="/categories/popular" component={Popular} />
            <Route exact path="/categories/toprated" component={TopRated} />
            <Route exact path="/categories/upcoming" component={Upcoming} />
            <Route exact path="/movie/:movieID" component={MovieInfo} />
            <Route exact path="/search_results/:query" component={Results} />
            <Route exact path="/genres/:genreId" component={Genres} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;
