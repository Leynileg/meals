import { createSlice } from "@reduxjs/toolkit";

import { REDUX_SLICE } from "consts/reduxSlices";

import { AddFavoritePayload, FavoritesState } from "./favorites.typings";
import { fetchFavorites } from "./favorites.thunks";

const initialState: FavoritesState = {
  favoritesIdsList: [],
  favoritesList: [],
};

const favoritesSlice = createSlice({
  name: REDUX_SLICE.FAVORITES,
  initialState,
  reducers: {
    addFavorite: (state, action: AddFavoritePayload) => {
      state.favoritesIdsList.push(action.payload.mealId);
    },
    removeFavorite: (state, action: AddFavoritePayload) => {
      state.favoritesIdsList.splice(
        state.favoritesIdsList.indexOf(action.payload.mealId),
        1,
      );
    },
    resetState: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favoritesList = action.payload;
    });
  },
});

const { addFavorite, removeFavorite, resetState } = favoritesSlice.actions;

export {
  initialState,
  favoritesSlice,
  addFavorite,
  removeFavorite,
  fetchFavorites,
  resetState,
};
