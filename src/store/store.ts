import { BooksSchema, StateSchema } from "store/types";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { booksReducer } from "store/reducers/booksReducer/booksSlice";

export function createReduxStore(initialstate?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    books: booksReducer,
  };
  const store = configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: false,
    preloadedState: initialstate,
  });
  return store;
}
