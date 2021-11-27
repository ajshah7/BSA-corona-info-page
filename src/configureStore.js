import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

export default createStore(
  rootReducer(history),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware), ...enhancers)
);
