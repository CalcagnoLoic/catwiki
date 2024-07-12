import { useEffect, useState } from "react";
import { getImages, ImageData } from "../lib/definitions";

export const useFetchImage = ({ slug, limit }: getImages) => {
  const [imageSrc, setImageSrc] = useState<ImageData[]>([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await fetch(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${slug}&limit=${limit}&api_key=${process.env.API_KEY}`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setImageSrc(data);
      } catch (error) {
        setImageSrc([]);
        console.error(error);
      }
    };

    getImages();
  }, [slug, limit]);

  return { imageSrc };
};
