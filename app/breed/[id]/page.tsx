"use client";

import "../../ui/globals.css";
import { useFetch } from "@/app/hooks/useFetch";
import { useEffect, useState } from "react";

const BreedPage = ({ params }: { params: string }) => {
  const { id } = params;
  const { breed } = useFetch(id);

  return (
    <div>
      {!breed ? (
        <div className="mx-12 flex flex-col xl:flex-row mt-10">
          <img src="" alt="image ici" className="xl:h-[400px] xl:w-[400px]" />
          <div className="h-[305px]"></div>

          <div>
            <h1>Bengal</h1>
            <p>
              Bengals are a lot of fun to live with, but they're definitely not
              the cat for everyone, or for first-time cat owners. Extremely
              intelligent, curious and active, they demand a lot of interaction
              and woe betide the owner who doesn't provide it.
            </p>
          </div>
        </div>
      ) : (
        <p>Breed not found</p>
      )}
    </div>
  );
};

export default BreedPage;
