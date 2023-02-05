import { RootState } from "typings/redux";

const getCategoryMeals = (state: RootState, category: string) =>
  state.meals.mealsPerCategory[category] ?? [];

const getMealById = (state: RootState, mealId: string) =>
  state.meals.allMeals.find(meal => meal.id === mealId)!;

export { getCategoryMeals, getMealById };
