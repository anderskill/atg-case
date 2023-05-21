export async function fetchRecentResults(betType) {
  try {
    const response = await fetch(
      `https://www.atg.se/services/racinginfo/v1/api/products/${betType}`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch recent results");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    // Handle error
  }
}
export async function fetchRaceDetails(raceIds) {
  try {
    const requests = raceIds.map((raceId) =>
      fetch(`https://www.atg.se/services/racinginfo/v1/api/games/${raceId}`, {
        mode: "cors",
      }).then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch race details for race ID: ${raceId}`
          );
        }
        return response.json();
      })
    );

    const raceDetails = await Promise.all(requests);
    return raceDetails;
  } catch (error) {
    console.error(error);
    // Handle error
  }
}
