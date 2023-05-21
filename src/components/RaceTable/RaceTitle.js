import React from "react";
import styles from "../../styles/RaceTitle.module.css";

const RaceTitle = ({ race, startTime }) => {
  return (
    <h3
      className={styles.raceTitle}
    >{`${race?.number} - ${race?.name} ${startTime}`}</h3>
  );
};

export default RaceTitle;
