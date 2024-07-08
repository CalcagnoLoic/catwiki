import { useEffect, useState } from "react";
import { Cat } from "../lib/definitions";

export const useFetch = ({ id }: { id: string }) => {
  const [breed, setBreed] = useState<Cat | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchBreed = async () => {
      try {
        const res = await fetch(
          `https://api.thecatapi.com/v1/breeds/${id}?api_key=${process.env.API_KEY}`,
          { signal }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data)
        setBreed(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBreed();

    return () => {
      abortController.abort();
    };
  }, [id]);

  useEffect(() => {
    console.log("breed updated:", breed);
  }, [breed]);

  return { breed, loading, error };
};
