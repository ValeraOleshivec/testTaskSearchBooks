import React, { SelectHTMLAttributes } from "react";
import styles from "./Select.module.scss";
import { SelectOptions } from "components/ui/SearchSection/SearchSection";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOptions[];
}
export const Select = (props: SelectProps) => {
  const { options, ...restProps } = props;
  return (
    <div className={styles.selectSection}>
      <select {...restProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
