import { createAsyncThunk } from "@reduxjs/toolkit";

import { getFavoritesList } from "@controllers/favorites";

import { Meal } from "@typings/meals";
import { RootState } from "@typings/redux";

import { getFavoritesIds } from "./favorites.selectors";

const FETCH_FAVORITES = "favorites/fetch_favorites";

const fetchFavorites = createAsyncThunk<Meal[], void, { state: RootState }>(
  FETCH_FAVORITES,
  async (_, thunkAPI) => {
    const favoritesIdsList = getFavoritesIds(thunkAPI.getState());

    const response = await getFavoritesList(favoritesIdsList);

    return response.data;
  },
);

export { fetchFavorites, FETCH_FAVORITES };
