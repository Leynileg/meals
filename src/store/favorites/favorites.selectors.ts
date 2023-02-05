import { RootState } from "typings/redux";

const getFavoritesIds = (state: RootState) => state.favorites.favoritesIdsList;

const getFavorites = (state: RootState) => state.favorites.favoritesList;

export { getFavorites, getFavoritesIds };
