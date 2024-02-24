import { createSlice } from "@reduxjs/toolkit";
import { BooksSchema } from "store/types";
import { act } from "react-dom/test-utils";
import { getBooksList } from "store/reducers/booksReducer/getBooksList";
const initialState: BooksSchema = {
  loading: false,
  error: undefined,
  books: [],
  searchInput: "",
  category: "all",
  sort: "relevance",
  booksIndex: 0,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchInput = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setMoreBooks: (state, action) => {
      state.books = [...state.books, ...action.payload];
    },
    setIndex: (state, action) => {
      if (action.payload === 0) {
        state.booksIndex = 0;
        return;
      }
      state.booksIndex += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooksList.pending, (state, action) => {
      state.error = undefined;
      state.loading = true;
    });
    builder.addCase(getBooksList.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getBooksList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: booksActions } = booksSlice;
export const { reducer: booksReducer } = booksSlice;
