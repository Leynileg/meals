import { store } from "@store/store";
import {
  initialState,
  fetchCategories,
  resetState,
  getCategories,
  getCategoryById,
} from "@store/categories";
import { Dispatch } from "@typings/redux";
import { CATEGORIES } from "@data/dummy-data";

const dispatch = store.dispatch;

beforeEach(() => {
  dispatch(resetState());
});

describe("Redux `categories` reducer tests", () => {
  it("should have proper initial state", () => {
    const categoriesState = store.getState().categories;

    expect(categoriesState).toStrictEqual(initialState);
  });
});

describe("Redux `categories` thunk actions tests", () => {
  it("should properly fetch a list of categories", async () => {
    await dispatch(fetchCategories());

    expect(store.getState().categories.categoriesList).toHaveLength(
      CATEGORIES.length,
    );
  });
});

describe("Redux `categories` selectors tests", () => {
  beforeEach(async () => {
    await dispatch(fetchCategories());
  });

  it("should properly return a list of categories", () => {
    expect(getCategories(store.getState())).toHaveLength(CATEGORIES.length);
  });

  it("should properly return a specific category", () => {
    const expected = CATEGORIES[0];

    expect(getCategoryById(store.getState(), expected.id)).toStrictEqual(
      expected,
    );
  });
});
