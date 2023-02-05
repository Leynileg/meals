import { store } from "store/store";
import {
  initialState,
  addFavorite,
  removeFavorite,
  getFavorites,
  getFavoritesIds,
  fetchFavorites,
  resetState,
} from "store/favorites";

import { MEALS } from "@data/dummy-data";

const dispatch = store.dispatch;

beforeEach(() => {
  dispatch(resetState());
});

describe("Redux `favorites` reducer tests", () => {
  it("should have proper initial state", () => {
    const favoritesState = store.getState().favorites;

    expect(favoritesState).toStrictEqual(initialState);
  });
});

describe("Redux `favorites` actions tests", () => {
  it("should properly add a new item to favoritesIdsList", () => {
    const expected = "test";

    dispatch(addFavorite({ mealId: expected }));

    expect(store.getState().favorites.favoritesIdsList).toContain(expected);
  });

  it("should properly remove an item from favoritesIdsList", () => {
    const testValue = "test";

    dispatch(addFavorite({ mealId: testValue }));

    expect(store.getState().favorites.favoritesIdsList).toContain(testValue);

    dispatch(removeFavorite({ mealId: testValue }));

    expect(store.getState().favorites.favoritesIdsList).not.toContain(
      testValue,
    );
  });
});

describe("Redux `favorites` thunk actions tests", () => {
  it("should fetch a list of favorite meals", async () => {
    const mockMealId = MEALS[0].id;

    dispatch(addFavorite({ mealId: mockMealId }));
    await dispatch(fetchFavorites());

    expect(store.getState().favorites.favoritesList).toHaveLength(1);
  });
});

describe("Redux `favorites` selectors tests", () => {
  beforeEach(async () => {
    dispatch(addFavorite({ mealId: MEALS[0].id }));
    await dispatch(fetchFavorites());
  });

  it("should return a proper list of favorites ids", () => {
    expect(getFavoritesIds(store.getState())).toHaveLength(1);
  });

  it("should return a proper list of favorites", async () => {
    expect(getFavorites(store.getState())).toHaveLength(1);
  });
});
