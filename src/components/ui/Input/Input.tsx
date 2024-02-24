import React, { HTMLAttributes, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import { classNames } from "utils/classNames";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...restProps } = props;
  return (
    <div>
      <input
        className={classNames(styles.input, {}, [className])}
        {...restProps}
      />
    </div>
  );
};
