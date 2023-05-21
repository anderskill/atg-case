import React from "react";
import styles from "../../styles/RaceTable.module.css";
import TrackTitle from "./TrackTitle";
import RaceTitle from "./RaceTitle";
import Horse from "./Horse";
import HorseDetails from "./HorseDetails";

const RaceTable = ({
  raceDetails,
  formatTime,
  handleClickedHorse,
  clickedHorseId,
}) => {
  return (
    <section className={styles.section}>
      {raceDetails?.map((races) =>
        races?.races?.map((race) => (
          <div key={race?.id} className={styles.container}>
            <TrackTitle
              race={race}
              startTime={formatTime(race?.scheduledStartTime)}
            />
            <div className={styles.raceContainer}>
              <RaceTitle race={race} startTime={formatTime(race?.startTime)} />

              {race?.starts?.map((horse) => {
                const horseId = `${race?.id}-${horse?.number}`;
                return (
                  <div key={horse?.number} className={styles.horseContainer}>
                    <Horse
                      handleClick={() => handleClickedHorse(horseId)}
                      horse={horse}
                    />

                    {clickedHorseId === horseId && (
                      <HorseDetails horse={horse} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default RaceTable;
