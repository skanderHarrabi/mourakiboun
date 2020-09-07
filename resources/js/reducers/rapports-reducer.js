import {
    FETCH_RAPPORTS_REQUEST,
    FETCH_RAPPORTS_FAILURE,
    FETCH_RAPPORTS_SUCCESS
} from "../actions/rapports-actions/types";

const intialState = {
    rapports: []
};

const rapportsReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_RAPPORTS_REQUEST:
      return state;

    case FETCH_RAPPORTS_SUCCESS:
      return { ...state, rapports: action.payload };

    case FETCH_RAPPORTS_FAILURE:
      return state;

    default:
      return state;
  }
};

export default rapportsReducer;
