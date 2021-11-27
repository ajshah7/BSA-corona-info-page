import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import HomePage from "../Containers/HomePage/reducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    HomePage,
  });

export default rootReducer;
