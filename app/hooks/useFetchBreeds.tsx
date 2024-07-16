import { Cat } from "../lib/definitions";
import { useEffect, useState } from "react";

export const useFetchBreeds = () => {
  const [breeds, setBreeds] = useState<Cat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.thecatapi.com/v1/breeds?api_key=${process.env.API_KEY}`,
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setBreeds(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { breeds, loading, error };
};
