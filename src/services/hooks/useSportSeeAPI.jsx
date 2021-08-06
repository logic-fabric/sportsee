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

        console.log("PROMISE RESOLVED");
        console.log("rawData =", data);

        const extractedData = extractDataByService(data, service);

        console.log("extractedData =", extractedData);

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

  console.log(`--- useSportSeeApi for ${endpoint} ---`);
  console.log("data =", data);
  console.log("isLoading =", isLoading);
  console.log("error =", error);

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
      default:
        return;
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
