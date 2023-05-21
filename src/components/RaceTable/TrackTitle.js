import React from "react";
import styles from "../../styles/TrackTitle.module.css";

const TrackTitle = ({ race, startTime }) => {
  return (
    <div className={styles.trackTitleContainer}>
      <h1
        className={styles.trackTitle}
      >{`${race?.track?.name} - ${startTime}`}</h1>
    </div>
  );
};

export default TrackTitle;
