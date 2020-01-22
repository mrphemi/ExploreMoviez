import { FETCHING, FETCHED } from "../actions/types";

function loadingReducer(state = false, action) {
  switch (action.type) {
    case FETCHING:
      return true;
    case FETCHED:
      return false;
    default:
      return state;
  }
}

export default loadingReducer;
