import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "typings/redux";

const getMealsState = (state: RootState) => state.meals;

const getCategoryMeals = createSelector(
  [getMealsState, (_, categoryId: string) => categoryId],
  (state, categoryId: string) => state.mealsPerCategory[categoryId] ?? [],
);

const getMealById = createSelector(
  [getMealsState, (_, mealId: string) => mealId],
  (state, mealId) =>
    state.allMeals.find(meal => meal.id === mealId)!,
);

export { getCategoryMeals, getMealById };
