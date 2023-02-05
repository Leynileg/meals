import { createSlice } from "@reduxjs/toolkit";

import { REDUX_SLICE } from "consts/reduxSlices";

import { MealsState } from "./meals.typings";
import { fetchMeals } from "./meals.thunks";

const initialState: MealsState = {
  mealsPerCategory: {},
  allMeals: [],
};

const mealsSlice = createSlice({
  name: REDUX_SLICE.MEALS,
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(fetchMeals.fulfilled, (state, action) => {
      const { categoryId } = action.meta.arg;
      const allMealsToFilter = [...state.allMeals, ...action.payload];

      state.mealsPerCategory[categoryId] = action.payload;
      state.allMeals = [...new Set(allMealsToFilter)]; // removing duplicates
    });
  },
});

const { resetState } = mealsSlice.actions;

export { mealsSlice, initialState, resetState };
