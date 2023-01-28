import { createAsyncThunk } from "@reduxjs/toolkit";

import { Category } from "@typings/categories";

import { getCategoriesList } from "@controllers/categories";

const FETCH_CATEGORIES = "categories/fetch_categories";

const fetchCategories = createAsyncThunk<Category[], void>(
  FETCH_CATEGORIES,
  async () => {
    const response = await getCategoriesList();

    return response.data;
  },
);

export { fetchCategories, FETCH_CATEGORIES };
