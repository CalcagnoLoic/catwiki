"use client";

import "@/app/ui/globals.css";

import { useFetchBreeds } from "@/app/hooks/useFetchBreeds";
import { mostPopularCats } from "@/app/lib/data";
import { MostResearchedSkeleton } from "@/app/ui/components/skeletons";

import Custom404 from "@/app/ui/components/Custom404";
import GoBackButton from "@/app/ui/components/GoBackButton";
import Heading from "@/app/ui/components/Heading";
import MostResearchedBreed from "@/app/ui/components/Breed/MostResearched/MostResearchedBreed";

const Page = () => {
  const { breeds, loading, error } = useFetchBreeds();

  const popularBreeds = breeds.filter((breed) =>
    mostPopularCats.includes(breed.id),
  );

  return (
    <div>
      {popularBreeds.length !== 0 && (
        <>
          <GoBackButton cssPosition="" />
          <Heading
            kind="h1"
            css="mt-5 text-3xl font-semibold text-cioccolato"
            content="Top 10 most searched breeds"
          />
        </>
      )}

      {error && <Custom404 error={error} />}

      {loading && <MostResearchedSkeleton />}

      {popularBreeds.length !== 0 &&
        popularBreeds.map((breed, index) => (
          <MostResearchedBreed breed={breed} key={breed.id} index={index+1} />
        ))}

      {popularBreeds.length !== 0 && <GoBackButton cssPosition="mb-8" />}
    </div>
  );
};

export default Page;
