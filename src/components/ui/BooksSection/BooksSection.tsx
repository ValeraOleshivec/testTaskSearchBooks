import React from "react";
import styles from "./BooksSection.module.scss";
import { Book } from "components/ui/Book";
import { useSelector } from "react-redux";
import { StateSchema } from "store/types";

export const BooksSection = () => {
  const { loading, books, error } = useSelector(
    (state: StateSchema) => state.books,
  );
  if (loading) return <div>Loading.....</div>;
  return (
    <div className={styles.booksSection}>
      {books.map((item) => {
        const { authors, imageLinks, title, categories } = item.volumeInfo;
        console.log(item);
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
  );
};
