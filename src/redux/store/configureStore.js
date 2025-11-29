import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { reviewReducers } from "..";

const rootReducer = combineReducers({
  reviews: reviewReducers,
});

const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunk, logger),
);
export default store;
