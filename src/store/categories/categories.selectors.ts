import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "typings/redux";

const getCategoriesState = (state: RootState) => state.categories;

const getCategories = createSelector(
  getCategoriesState,
  state => state.categoriesList,
);

const getCategoryById = createSelector(
  [getCategories, (_, id: string) => id],
  (categories, categoryId) => categories.find(el => el.id === categoryId),
);

export { getCategories, getCategoryById };
