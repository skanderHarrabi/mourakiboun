import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import postsReducer from "./posts-reducer";
import rapportsReducer from "./rapports-reducer";
import actualitesReducer from "./actualites-reducer";

const rootReducer = combineReducers({
  authReducer,
  postsReducer,
  rapportsReducer,
  actualitesReducer
});

export default rootReducer;
