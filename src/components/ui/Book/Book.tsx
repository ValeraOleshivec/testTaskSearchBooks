import React from "react";
import styles from "./Book.module.scss";
import { Typography } from "components/ui/Typography";
import { TypographyType } from "components/ui/Typography/Typography";
interface BookProps {
  title: string;
  category: string[];
  authors: string[];
  image?: string;
}

export const Book = (props: BookProps) => {
  const { title, category, authors, image } = props;
  const slicedTitle = title?.length > 45 ? `${title.slice(0, 40)}...` : title;
  const authorsLength = authors?.length - 1;
  const authorText = authors?.join(", ");
  return (
    <div className={styles.book}>
      <div className={styles.imageBlock}>
        <img
          src={
            image ??
            "https://books.google.ru/googlebooks/images/no_cover_thumb.gif"
          }
          alt={"Картинка не подгрузилась :("}
          className={styles.image}
        />
      </div>
      <div className={styles.textSection}>
        {category && (
          <Typography
            text={category[0]}
            type={TypographyType.CATEGORY}
            className={styles.category}
          />
        )}
        <Typography
          text={slicedTitle}
          type={TypographyType.TITLE}
          className={styles.title}
        />
        {authors && (
          <div className={styles.authors}>
            <Typography text={authorText} type={TypographyType.AUTHOR} />
          </div>
        )}
      </div>
    </div>
  );
};
