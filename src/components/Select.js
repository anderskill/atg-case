import React from "react";
import styles from "../styles/Select.module.css";

const Select = ({ name, id, value, onChange, options }) => {
  return (
    <div className={styles.select}>
      <select name={name} id={id} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
