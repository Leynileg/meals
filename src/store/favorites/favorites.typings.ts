import { PayloadAction } from "@reduxjs/toolkit";
import { Meal } from "@typings/meals";

interface FavoritesState {
  favoritesIdsList: string[];
  favoritesList: Meal[];
}

type AddFavoritePayload = PayloadAction<{
  mealId: string;
}>;

type RemoveFavoritePayload = PayloadAction<{
  mealId: string;
}>;

type FetchFavoritePayload = PayloadAction<{
  data: string[];
}>;

export {
  FavoritesState,
  AddFavoritePayload,
  RemoveFavoritePayload,
  FetchFavoritePayload,
};
