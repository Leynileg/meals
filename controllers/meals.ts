import { CATEGORIES, MEALS } from "@data/dummy-data";
import { getRandomNumber } from "services/GetRandomNumber";
import { Meal } from "typings/meals";

type Result = Promise<{
  data: Meal[];
}>;

const getMealsForCategoryList = (categoryId: string): Result => {
  const timeout = getRandomNumber(200, 800);

  const result = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: result });
    }, timeout);
  });
};

export { getMealsForCategoryList };
