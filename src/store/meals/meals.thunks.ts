import { createAsyncThunk } from "@reduxjs/toolkit";

import { getMealsForCategoryList } from "@controllers/meals";
import { Meal } from "typings/meals";

const FETCH_MEALS = "meals/fetch_meals";

const fetchMeals = createAsyncThunk<Meal[], { categoryId: string }>(
  FETCH_MEALS,
  async ({ categoryId }) => {
    const response = await getMealsForCategoryList(categoryId);

    return response.data;
  },
);

export { fetchMeals, FETCH_MEALS };
