import { MEALS } from "@data/dummy-data";

import { getRandomNumber } from "@services/GetRandomNumber";
import { Meal } from "@typings/meals";

type Result = Promise<{
  data: Meal[];
}>;

const getFavoritesList = (favoritesIdsList: string[]): Result => {
  const timeout = getRandomNumber(200, 800);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!favoritesIdsList.length) {
        return resolve({ data: [] });
      }

      const favoriteMeals = favoritesIdsList.map(
        favoriteId => MEALS.find(meal => meal.id === favoriteId)!,
      );

      resolve({ data: favoriteMeals });
    }, timeout);
  });
};

export { getFavoritesList };
