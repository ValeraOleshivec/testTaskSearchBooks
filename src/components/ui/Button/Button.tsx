import React, { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";
import { classNames } from "utils/classNames";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, className, ...restProps } = props;
  return (
    <button
      className={classNames(styles.button, {}, [className])}
      {...restProps}
    >
      {children}
    </button>
  );
};
