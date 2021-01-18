import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { listReducer } from "./listReducer";
import { favouriteReducer } from "./favouriteReducer";

let rootReducer = combineReducers({
  list: listReducer,
  favourite: favouriteReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
