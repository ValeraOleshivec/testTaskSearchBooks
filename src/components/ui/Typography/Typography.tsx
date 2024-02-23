import React, { HTMLAttributes } from "react";
import styles from "./Typography.module.scss";
import { classNames } from "utils/classNames";
export enum TypographyType {
  TITLE = "title",
  AUTHOR = "author",
  CATEGORY = "category",
}
interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  type: TypographyType;
}

export const Typography = (props: TypographyProps) => {
  const { text, type, className, ...restProps } = props;
  return (
    <p className={classNames(styles[type], {}, [className])} {...restProps}>
      {text}
    </p>
  );
};
