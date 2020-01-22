import { combineReducers } from "redux";

import movieReducer from "./moviesReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  movies: movieReducer,
  isLoading: loadingReducer
});
