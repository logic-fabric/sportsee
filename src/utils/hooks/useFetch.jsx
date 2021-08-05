import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setData(data);
      } catch (err) {
        console.error(`An error occured while fetching ${url} : ${err}`);

        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
