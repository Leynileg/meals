import { createSlice } from "@reduxjs/toolkit";

import { REDUX_SLICE } from "@consts/reduxSlices";

import { CategoriesState } from "./categories.typings";
import { fetchCategories } from "./categories.thunks";

const initialState: CategoriesState = {
  categoriesList: [],
};

const categoriesSlice = createSlice({
  name: REDUX_SLICE.CATEGORIES,
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categoriesList = action.payload;
    });
  },
});

const { resetState } = categoriesSlice.actions;

export { categoriesSlice, initialState, resetState };
