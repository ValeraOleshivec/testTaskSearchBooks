import React, { useCallback } from "react";
import styles from "./SearchSection.module.scss";
import { Select } from "components/ui/Select";
import { Input } from "components/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { getBooksList } from "store/reducers/booksReducer/getBooksList";
import { AnyAction } from "@reduxjs/toolkit";
import { booksActions } from "store/reducers/booksReducer/booksSlice";
import { StateSchema } from "store/types";

export interface SelectOptions {
  value: string;
  label: string;
}

const categoryOptions: SelectOptions[] = [
  { value: "all", label: "Все категории" },
  { value: "art", label: "Художественная" },
  { value: "biography", label: "Биография" },
  { value: "computes", label: "Компьютеры" },
  { value: "history", label: "История" },
  { value: "medical", label: "Медицина" },
  { value: "poetry", label: "Поэзия" },
];
const sortByOptions: SelectOptions[] = [
  { value: "relevance", label: "По релевантности" },
  { value: "newest", label: "По новизне" },
];

export const SearchSection = () => {
  // any type поставил чтобы не возвращать typeof store.dispatch
  // в новой версии Redux почему-то поставил Unknown Action, хотя раньше(версия 1.8.0 к примеру) any было по дефолту
  const dispatch = useDispatch<any>();
  const { searchInput, sort, category } = useSelector(
    (state: StateSchema) => state.books,
  );
  const onSearchClick = useCallback(() => {
    dispatch(
      getBooksList({
        search: searchInput,
        sort: sort,
        category: category,
      }),
    );
  }, [searchInput, sort, category, dispatch]);
  return (
    <div className={styles.section}>
      <div className={styles.inputSection}>
        <Input
          onChange={(e) => dispatch(booksActions.setSearch(e.target.value))}
          value={searchInput}
        />
        <button onClick={() => onSearchClick()}>Тест редьюсера</button>
      </div>
      <Select
        onChange={(e) => dispatch(booksActions.setCategory(e.target.value))}
        options={categoryOptions}
        value={category}
      />
      <Select
        onChange={(e) => dispatch(booksActions.setSort(e.target.value))}
        options={sortByOptions}
        value={sort}
      />
    </div>
  );
};
