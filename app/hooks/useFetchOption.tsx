import { useEffect, useState } from "react";
import { Cat } from "../lib/definitions";

export const useFetchOptions = () => {
  const [options, setOptions] = useState<Cat[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.thecatapi.com/v1/breeds?api_key=${process.env.API_KEY}`,
      );
      const data = await res.json();
      console.log("5");

      const dataObj = data.map((cat: { id: string; name: string }) => ({
        value: cat.id,
        label: cat.name,
      }));
      setOptions(dataObj);
    } catch (error) {
      setOptions([]);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { options };
};
