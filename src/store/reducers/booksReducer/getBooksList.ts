import { createAsyncThunk } from "@reduxjs/toolkit";
import { booksActions } from "store/reducers/booksReducer/booksSlice";
import { API_KEY } from "../../../../config/consts";

interface getBookListProps {
  search: string;
  sort: string;
  category: string;
  index?: number;
}

export const getBooksList = createAsyncThunk<
  Record<string, any>,
  getBookListProps,
  { rejectValue: string }
>("books/getBooksList", async (params, thunkApi) => {
  console.log(params);
  try {
    const response: Record<string, any> = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${params.search}${params.category === "all" ? "" : `+subject:${params.category}`}&orderBy=${params.sort}${params.index ? `&startIndex=${params.index}` : ""}&maxResults=30&key=${API_KEY}`,
    );
    const json = await response.json();
    console.log(json);
    if (!json.items) {
      if (response.status === 200) {
        throw new Error("Не удалось найти книги");
      }
      throw new Error(
        "На ошибки хотел прикрутить notistack, но так как это тестовое не стал ",
      );
    }
    if (params.index) {
      thunkApi.dispatch(booksActions.setMoreBooks(json.items));
      return json.items;
    }
    thunkApi.dispatch(booksActions.setBooks(json.items));
    return json.items;
  } catch (e) {
    alert(e.message);
    return thunkApi.rejectWithValue("Что-то пошло не так");
  }
});
