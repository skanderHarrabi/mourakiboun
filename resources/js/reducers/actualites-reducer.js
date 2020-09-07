import {
    FETCH_ACTUALITES_REQUEST,
    FETCH_ACTUALITES_FAILURE,
    FETCH_ACTUALITES_SUCCESS
} from "../actions/actualites-actions/types";

const intialState = {
    actualites: []
};

const actualitesReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_ACTUALITES_REQUEST:
      return state;

    case FETCH_ACTUALITES_SUCCESS:
      return { ...state, actualites: action.payload };

    case FETCH_ACTUALITES_FAILURE:
      return state;

    default:
      return state;
  }
};

export default actualitesReducer;
