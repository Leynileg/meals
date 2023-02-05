import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "typings/redux";

const getFavoritesState = (state: RootState) => state.favorites;

const getFavoritesIds = createSelector(
  getFavoritesState,
  state => state.favoritesIdsList,
);

const getFavorites = createSelector(
  getFavoritesState,
  state => state.favoritesList,
);

export { getFavorites, getFavoritesIds };
