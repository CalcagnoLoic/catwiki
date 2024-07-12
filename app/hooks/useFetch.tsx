import { useEffect, useState } from "react";
import { Cat } from "../lib/definitions";

export const useFetch = ({ slug }: { slug: string }) => {
  const [breed, setBreed] = useState<Cat | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBreed = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.thecatapi.com/v1/breeds/${slug}?api_key=${process.env.API_KEY}`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setBreed(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBreed();
  }, [slug]);

  return { breed, loading, error };
};
