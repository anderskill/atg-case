import React from "react";
import "./App.css";
import { fetchRecentResults, fetchRaceDetails } from "./utils/fetch";
import Select from "./components/Select";
import { formatTime } from "./utils/formatTime";
import RaceTable from "./components/RaceTable/RaceTable";
import Header from "./components/Header";
import Loading from "./components/Loading";
import logo from "./assets/logo.png";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [selectedBetType, setSelectedBetType] = React.useState("V75");
  const [recentRaceData, setRecentRaceData] = React.useState();
  const [raceDetails, setRaceDetails] = React.useState();
  const [clickedHorseId, setClickedHorseId] = React.useState(null);

  const betTypes = ["V75", "V86", "GS75"];

  React.useEffect(() => {
    fetchRecentResults(selectedBetType)
      .then((data) => setRecentRaceData(data))
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, [selectedBetType]);

  React.useEffect(() => {
    if (recentRaceData) {
      console.log("recentRaceData:", recentRaceData);
      const raceIds = recentRaceData?.results?.map((r) => r.id);
      fetchRaceDetails(raceIds)
        .then((raceDetails) => setRaceDetails(raceDetails), setIsLoading(false))
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    }
  }, [recentRaceData]);

  const handleBetTypeChange = (event) => {
    setIsLoading(true);
    setSelectedBetType(event.target.value);
  };

  const handleClickedHorse = (horseId) => {
    setClickedHorseId((prevHorseId) => {
      if (prevHorseId === horseId) {
        return null;
      } else {
        return horseId;
      }
    });
  };

  return (
    <div className="App">
      <Header>
        <img src={logo} alt="ATG logo" />
      </Header>
      <Select
        name="betType"
        id="betType"
        value={selectedBetType}
        onChange={handleBetTypeChange}
        options={betTypes}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <RaceTable
          raceDetails={raceDetails}
          formatTime={formatTime}
          handleClickedHorse={handleClickedHorse}
          clickedHorseId={clickedHorseId}
        />
      )}
    </div>
  );
}

export default App;
