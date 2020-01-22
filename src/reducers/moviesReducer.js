import { GET_MOVIES, GET_GENRES, GET_MOVIE } from "../actions/types";

const INITIAL_STATE = {
  movies: {
    page: 1,
    total_pages: undefined,
    list: []
  },
  genres: [],
  movie: {}
};

function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: {
          ...action.info
        }
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.genres
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.movie
      };
    default:
      return state;
  }
}

export default movieReducer;
