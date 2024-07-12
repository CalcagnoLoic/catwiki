import "@/app/ui/globals.css";

import { cats } from "@/app/lib/data";
import { Icons } from "@/app/ui/icons";

import Heading from "@/app/ui/components/Heading";
import Image from "next/image";
import Line from "@/app/ui/components/Line";
import Link from "next/link";
import Paragraph from "@/app/ui/components/Paragraph";
import SearchBar from "@/app/ui/components/SearchBar";

const Page = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="/img/Hero.webp"
          alt="Hero Catwiki"
          width="0"
          height="0"
          sizes="100vw"
          className="mt-7 h-auto w-full rounded-t-3xl xl:h-[450px]"
        />

        <div className="absolute top-1/2 ml-6 -translate-y-1/2 xl:ml-24">
          <Image
            src="/img/CatwikiLogo.svg"
            width="0"
            height="0"
            alt="Welcome to Catwiki"
            className="w-[60px] invert md:w-[120px] xl:w-[300px]"
          />

          <Paragraph
            kind="p"
            css="max-w-40 text-xs font-medium text-white md:max-w-64 xl:max-w-80 md:text-xl xl:text-2xl mt-2 md:mt-4"
            content="Get to know more about your cat breed"
          />

          <SearchBar />
        </div>
      </div>

      <div className="rounded-b-3xl bg-westar p-6 text-cannonBlack xl:px-24 xl:py-12">
        <Paragraph
          kind="p"
          css="text-sm font-semibold md:text-lg"
          content="Most Researched Breeds"
        />
        <Line cssPosition="mt-2" />

        <div className="flex flex-col justify-center md:flex-row md:justify-between">
          <Paragraph
            kind="p"
            css="mt-10 max-w-96 text-xl md:text-2xl xl:text-4xl font-bold"
            content="66+ Breeds For You to discover"
          />

          <div className="flex gap-2 md:self-end">
            <Link
              href={"/breed/most-researched"}
              className="mt-4 uppercase md:mt-0 md:self-end"
            >
              see more
            </Link>
            <Icons.arrowRight className="mt-4 self-center md:mt-0" />
          </div>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-5 md:mt-12 xl:grid-cols-4">
          {cats.map((cat) => (
            <div className="flex flex-col items-center" key={cat.id}>
              <div className="relative h-[130px] w-[130px] md:h-[220px] md:w-[220px]">
                <Image
                  src={cat.src}
                  alt={cat.breed}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="text pt-2 font-bold">{cat.breed}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-6 my-20 flex flex-col justify-between text-cannonBlack xl:mx-24 xl:flex-row">
        <div className="self-center xl:max-w-80">
          <Line cssPosition="mb-4" />
          <Heading
            kind="h2"
            content="Why should you have a cat?"
            css="text-4xl font-bold"
          />
          <Paragraph
            kind="p"
            css="mt-10"
            content="Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves"
          />

          <div className="mt-6 flex cursor-pointer gap-2">
            <Link href={"/why-a-cat"}>
              <Paragraph
                kind="p"
                css="mt-4 md:mt-0 md:self-end uppercase font-bold"
                content="read more"
              />
            </Link>
            <Icons.arrowRight className="mt-4 self-center md:mt-0" />
          </div>
        </div>

        <Image
          src="/img/catSection.webp"
          width={539}
          height={488}
          alt="Why should you have a cat?"
          className="mt-5 xl:mt-0"
        />
      </div>
    </>
  );
};

export default Page;
