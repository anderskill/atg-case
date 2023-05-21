import React from "react";
import styles from "../../styles/HorseDetails.module.css";

const HorseDetails = ({ horse }) => {
  return (
    <>
      <p
        className={styles.horseDetails}
      >{`Tränare: ${horse?.horse?.trainer?.firstName} ${horse?.horse?.trainer?.lastName}`}</p>
      <p
        className={styles.horseDetails}
      >{`Far: ${horse?.horse?.pedigree?.father?.name}`}</p>
    </>
  );
};

export default HorseDetails;
