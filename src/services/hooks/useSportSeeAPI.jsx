import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000";

export const ACTIVITY_BY_KIND = {
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

        const extractedData = extractDataForService(data, service);

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

function extractDataForService(data, service) {
  if (data) {
    switch (service) {
      case "firstName":
        return data.data.userInfos.firstName;
      default:
        return;
    }
  }

  return null;
}
