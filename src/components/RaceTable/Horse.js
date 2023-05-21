import React from "react";
import styles from "../../styles/Horse.module.css";

const Horse = ({ handleClick, horse }) => {
  return (
    <h4 className={styles.horseTitle} onClick={handleClick}>
      {`${horse?.number} ${horse?.horse?.name.toUpperCase()} - ${
        horse?.driver?.firstName
      } ${horse?.driver?.lastName}`}
    </h4>
  );
};

export default Horse;
