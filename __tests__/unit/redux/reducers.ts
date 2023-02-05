import { REDUX_SLICE } from "consts/reduxSlices";

import { store } from "store/store";

describe("redux `reducers` tests", () => {
  const reducerKeys = Object.keys(store.getState());

  it("should contain `favorites` reducer", () => {
    expect(reducerKeys).toContain(REDUX_SLICE.FAVORITES);
  });

  it("should contain `categories` reducer", () => {
    expect(reducerKeys).toContain(REDUX_SLICE.CATEGORIES);
  });

  it("should contain `meals` reducer", () => {
    expect(reducerKeys).toContain(REDUX_SLICE.MEALS);
  });
});
