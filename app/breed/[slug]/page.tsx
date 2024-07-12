"use client";
import "@/app/ui/globals.css";

import { BreedPage } from "@/app/lib/definitions";
import { useFetch } from "@/app/hooks/useFetch";
import { useFetchImage } from "@/app/hooks/useFetchImage";

import CatCaracteristics from "@/app/ui/components/Breed/Slug/CatCaracteristics";
import Heading from "@/app/ui/components/Heading";
import Image from "next/image";
import Loader from "@/app/ui/components/Loader";
import Paragraph from "@/app/ui/components/Paragraph";
import GoBackButton from "@/app/ui/components/GoBackButton";

const Page: React.FC<BreedPage> = ({ params }) => {
  const { slug } = params;
  const { breed, loading, error } = useFetch({ slug: slug });
  const { imageSrc } = useFetchImage({ slug: slug, limit: "1" });
  const { imageSrc: otherImageSrc } = useFetchImage({ slug: slug, limit: "10" });

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
          <div className="mt-10 flex flex-col xl:flex-row xl:gap-28">
            <>
              <div className="relative left-1/2 mt-5 h-[250px] w-[250px] -translate-x-1/2 md:h-[371px] md:w-[371px] xl:left-0 xl:mt-0 xl:translate-x-0">
                {imageSrc.length > 0 && (
                  <Image
                    src={imageSrc[0].url}
                    width={375}
                    height={375}
                    alt={breed.name}
                    className="rounded-3xl object-cover"
                  />
                )}
              </div>

              <div className="text-cioccolato xl:w-1/2">
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
              css="text-cioccolato text-3xl font-semibold mt-5"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              {otherImageSrc.map((catImage) => (
                <div
                  key={breed.id}
                  className="relative left-1/2 mt-5 h-[278px] w-[278px] -translate-x-1/2 xl:left-0 xl:translate-x-0"
                >
                  <Image
                    src={catImage.url}
                    fill
                    alt={breed.name}
                    className="rounded-3xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {breed && <GoBackButton cssPosition="mb-10" />}
    </div>
  );
};

export default Page;
