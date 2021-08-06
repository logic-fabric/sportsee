import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000";

const ACTIVITY_BY_KIND = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

export function useSportSeeApi(endpoint, service) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!endpoint) return;

    setIsLoading(true);

    async function fetchData() {
      try {
        const url = `${BASE_URL}/${endpoint}`;

        const response = await fetch(url);
        const data = await response.json();
        const extractedData = extractDataByService(data, service);

        if (service === "average-sessions") {
          console.log("PROMISE RESOLVED");
          console.log("rawData =", data);
          console.log("extractedData =", extractedData);
        }

        setData(extractedData);
      } catch (err) {
        console.error(`An error occured while fetching ${endpoint} : ${err}`);

        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint, service]);

  if (service === "average-sessions") {
    console.log(`--- useSportSeeApi for ${endpoint} ---`);
    console.log("data =", data);
    console.log("isLoading =", isLoading);
    console.log("error =", error);
  }

  return { data, isLoading, error };
}

function extractDataByService(data, service) {
  if (data) {
    switch (service) {
      case "firstName":
        return data === "can not get user"
          ? "unknown user"
          : data.data.userInfos.firstName;
      case "activities":
        return getActivities(data.data.data);
      case "average-sessions":
        return getAverageSessions(data.data.sessions);
      default:
        return "DEFAULT EXTRACTION";
    }
  }

  return null;
}

export function getDefaultActivities() {
  const activities = [];

  for (let key in ACTIVITY_BY_KIND) {
    activities.push({
      activity: ACTIVITY_BY_KIND[key],
      value: 0,
    });
  }

  return activities;
}

function getActivities(userData) {
  const activities = [];

  if (userData) {
    for (let item of userData) {
      activities.push({
        activity: ACTIVITY_BY_KIND[item.kind],
        value: item.value,
      });
    }

    return activities;
  }

  return getDefaultActivities();
}

export function getDefaultAverageSessions() {
  const averageSessions = [
    {
      day: "L",
      sessionLength: 0,
    },
    {
      day: "M",
      sessionLength: 0,
    },
    {
      day: "M",
      sessionLength: 0,
    },
    {
      day: "J",
      sessionLength: 0,
    },
    {
      day: "V",
      sessionLength: 0,
    },
    {
      day: "S",
      sessionLength: 0,
    },
    {
      day: "D",
      sessionLength: 0,
    },
  ];

  return averageSessions;
}

function getAverageSessions(userData) {
  let averageSessions = getDefaultAverageSessions();

  for (let index in userData) {
    averageSessions[index].sessionLength =
      userData[index].sessionLength;
  }

  return averageSessions;
}
