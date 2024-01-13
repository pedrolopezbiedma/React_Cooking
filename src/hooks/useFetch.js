import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const result = await axios.get(url);
        setData(result.data);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
        setIsPending(false);
      }

      setIsPending(false);
    };

    fetchData();

    // Cleaning callback
    return () => {
      // Do nothing for now
    };
  }, [url]);

  return { data, isPending, error };
};

export { useFetch };
