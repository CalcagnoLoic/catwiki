"use client";

import "@/app/ui/globals.css";

import { BreedPage } from "@/app/lib/definitions";
import { useFetch } from "@/app/hooks/useFetch";

import CatCaracteristics from "@/app/ui/components/Breed/Slug/CatCaracteristics";
import Heading from "@/app/ui/components/Heading";
import Image from "next/image";
import Loader from "@/app/ui/components/Loader";
import Paragraph from "@/app/ui/components/Paragraph";
import GoBackButton from "@/app/ui/components/GoBackButton";

const Page: React.FC<BreedPage> = ({ params }) => {
  const { slug } = params;
  const { breed, loading, error } = useFetch({ slug: slug });

  return (
    <div>
      {breed && <GoBackButton cssPosition="" />}

      {loading && <Loader />}

      {error && (
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col text-center text-xl font-semibold text-cioccolato md:text-3xl">
          <Paragraph
            kind="span"
            content="There is a problem... Try again later please"
            css="mb-3"
          />
          <Paragraph kind="span" content={error} css="mb-3" />
          <Image
            src="/img/error404.gif"
            alt="Breed not found"
            width={250}
            height={250}
            className="mx-auto mt-3 block rounded-2xl"
          />

          <GoBackButton cssPosition="block mx-auto" />
        </div>
      )}

      {breed && (
        <>
          <div className="mx-12 mt-10 flex flex-col gap-28 xl:flex-row">
            <>
              <Image
                src="/img/bengal.webp"
                width={371}
                height={371}
                alt="Bengal"
                className="max-h-[371px] rounded-3xl"
              />

              <div className="text-cioccolato">
                <Heading
                  kind="h1"
                  content={breed.name}
                  css="text-3xl font-semibold"
                />

                <Paragraph kind="p" css="mt-6" content={breed.description} />

                <CatCaracteristics breed={breed} />
              </div>
            </>
          </div>
          <div>
            <Heading
              kind="h2"
              content="Others photos"
              css="text-cioccolato text-3xl font-semibold"
            />
          </div>
        </>
      )}

      {breed && <GoBackButton cssPosition="mb-10" />}
    </div>
  );
};

export default Page;
