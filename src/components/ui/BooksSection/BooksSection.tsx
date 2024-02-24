import React, { useEffect } from "react";
import styles from "./BooksSection.module.scss";
import { Book } from "components/ui/Book";
import { useDispatch, useSelector } from "react-redux";
import { StateSchema } from "store/types";
import { Loading } from "components/ui/Loading";
import { Button } from "components/ui/Button";
import { getBooksList } from "store/reducers/booksReducer/getBooksList";
import { booksActions } from "store/reducers/booksReducer/booksSlice";
import { Typography } from "components/ui/Typography";
import { TypographyType } from "components/ui/Typography/Typography";

export const BooksSection = () => {
  const { loading, books, error, category, searchInput, sort, booksIndex } =
    useSelector((state: StateSchema) => state.books);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    if (booksIndex === 0) return;
    dispatch(
      getBooksList({
        search: searchInput,
        sort: sort,
        category: category,
        index: booksIndex,
      }),
    );
  }, [dispatch, booksIndex]);

  if (loading && booksIndex === 0)
    return (
      <div className={styles.loadingSection}>
        <Loading />
      </div>
    );
  if (books.length === 0) return;
  return (
    <>
      <div className={styles.bookCountSection}>
        <Typography
          text={`Найдено ${books.length} книг`}
          type={TypographyType.TITLE}
        />
      </div>
      <div className={styles.booksSection}>
        {books.map((item) => {
          const { authors, imageLinks, title, categories } = item.volumeInfo;
          return (
            <Book
              key={item.etag}
              authors={authors}
              title={title}
              category={categories}
              image={imageLinks?.thumbnail}
            />
          );
        })}
      </div>
      <div className={styles.buttonSection}>
        <Button
          onClick={() => {
            dispatch(booksActions.setIndex(30));
          }}
          className={styles.button}
        >
          {loading ? <Loading /> : "Loading more"}
        </Button>
      </div>
    </>
  );
};
