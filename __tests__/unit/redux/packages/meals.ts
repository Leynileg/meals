import { CATEGORIES, MEALS } from "@data/dummy-data";

import { store } from "@store/store";
import {
  fetchMeals,
  getCategoryMeals,
  getMealById,
  initialState,
  resetState,
} from "@store/meals";

const dispatch = store.dispatch;

const mockCategoryId = CATEGORIES[0].id;
const mockMealsFromCategory = MEALS.filter(meal =>
  meal.categoryIds.includes(mockCategoryId),
);

beforeEach(() => {
  dispatch(resetState());
});

describe("Redux `meals` reducer tests", () => {
  it("should have proper initial state", () => {
    const mealsState = store.getState().meals;

    expect(mealsState).toStrictEqual(initialState);
  });
});

describe("Redux `meals` thunk actions tests", () => {
  it("should properly fetch a list of meals", async () => {
    await dispatch(fetchMeals({ categoryId: mockCategoryId }));

    expect(store.getState().meals.allMeals).toStrictEqual(
      mockMealsFromCategory,
    );
    expect(
      store.getState().meals.mealsPerCategory[mockCategoryId],
    ).toStrictEqual(mockMealsFromCategory);
  });
});

describe("Redux `meals` selectors tests", () => {
  beforeEach(async () => {
    await dispatch(fetchMeals({ categoryId: mockCategoryId }));
  });

  it("should properly return a list of meals", () => {
    expect(getCategoryMeals(store.getState(), mockCategoryId)).toStrictEqual(
      mockMealsFromCategory,
    );
  });

  it("should properly return a specific meal", () => {
    const expected = mockMealsFromCategory[0];

    expect(getMealById(store.getState(), expected.id)).toStrictEqual(expected);
  });
});
