import React from "react";
import styles from "../styles/Header.module.css";

const Header = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Header;
