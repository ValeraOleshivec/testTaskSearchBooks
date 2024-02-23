import React, { HTMLAttributes, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div>
      <input className={styles.input} {...props} />
    </div>
  );
};
