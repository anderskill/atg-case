import React from "react";
import { render, screen } from "@testing-library/react";
import RaceTable from "./RaceTable";

describe("RaceTable", () => {
  test("renders race details correctly", () => {
    const raceDetails = [
      {
        races: [
          {
            id: 1,
            scheduledStartTime: "2023-05-18T10:00:00",
            startTime: "2023-05-18T10:30:00",
            starts: [
              {
                number: 1,
                horse: { name: "Horse 1" },
              },
              // Other starts...
            ],
          },
          // Other races...
        ],
      },
      // Other race details...
    ];

    const formatTime = jest.fn((time) => time); // Mock the formatTime function
    const handleClickedHorse = jest.fn(); // Mock the handleClickedHorse function

    render(
      <RaceTable
        raceDetails={raceDetails}
        formatTime={formatTime}
        handleClickedHorse={handleClickedHorse}
        clickedHorseId={null}
      />
    );

    // Assert that race details are rendered correctly
    expect(screen.getByText("TrackTitle component")).toBeInTheDocument();
    expect(screen.getByText("RaceTitle component")).toBeInTheDocument();
    expect(screen.getByText("Horse component")).toBeInTheDocument();
    expect(screen.queryByText("HorseDetails component")).toBeNull(); // Horse details not visible when not clicked

    // Assert that formatTime function is called with the correct arguments
    expect(formatTime).toHaveBeenCalledTimes(2);
    expect(formatTime).toHaveBeenCalledWith("2023-05-18T10:00:00");
    expect(formatTime).toHaveBeenCalledWith("2023-05-18T10:30:00");
  });
});
