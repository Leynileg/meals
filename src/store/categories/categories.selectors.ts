import { RootState } from "@typings/redux";

const getCategories = (state: RootState) => state.categories.categoriesList;

const getCategoryById = (state: RootState, categoryId: string) =>
  state.categories.categoriesList.find(el => el.id === categoryId);

export { getCategories, getCategoryById };
