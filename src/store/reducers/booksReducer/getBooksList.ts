import { createAsyncThunk } from "@reduxjs/toolkit";
import { booksActions } from "store/reducers/booksReducer/booksSlice";

interface getBookListProps {
  search: string;
  sort: string;
  category: string;
}

export const getBooksList = createAsyncThunk<
  Record<string, any>,
  getBookListProps,
  { rejectValue: string }
>("books/getBooksList", async (params, thunkApi) => {
  try {
    const response: Record<string, any> = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${params.search}&orderBy=${params.sort}&maxResults=30`,
    );
    const json = await response.json();
    if (!json.items) {
      throw new Error();
    }
    thunkApi.dispatch(booksActions.setBooks(json.items));
    return json.items;
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue("Что-то пошло не так");
  }
});
