import { CATEGORIES } from "@data/dummy-data";
import { getRandomNumber } from "services/GetRandomNumber";
import { Category } from "typings/categories";

type Result = Promise<{
  data: Category[];
}>;

const getCategoriesList = (): Result => {
  const timeout = getRandomNumber(200, 800);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: CATEGORIES });
    }, timeout);
  });
};

export { getCategoriesList };
