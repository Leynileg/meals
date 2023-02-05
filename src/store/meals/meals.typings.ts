import { Meal } from "typings/meals";

interface MealsState {
  mealsPerCategory: {
    [categoryId: string]: Meal[];
  };
  allMeals: Meal[];
}

export { MealsState };
