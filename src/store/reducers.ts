import { combineReducers } from "@reduxjs/toolkit";

import { REDUX_SLICE } from "consts/reduxSlices";

import { favoritesSlice } from "./favorites";
import { categoriesSlice } from "./categories";
import { mealsSlice } from "./meals";

const rootReducer = combineReducers({
  [REDUX_SLICE.CATEGORIES]: categoriesSlice.reducer,
  [REDUX_SLICE.MEALS]: mealsSlice.reducer,
  [REDUX_SLICE.FAVORITES]: favoritesSlice.reducer,
});

export { rootReducer };
