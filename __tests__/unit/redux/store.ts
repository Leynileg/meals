import { store } from "@store/store";

describe("redux `reducers` tests", () => {
  const storeKeys = Object.keys(store);

  it("should create store", () => {
    expect(storeKeys).toContain("dispatch");
    expect(storeKeys).toContain("subscribe");
    expect(storeKeys).toContain("getState");
    expect(storeKeys).toContain("replaceReducer");
  });
});
