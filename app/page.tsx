import "@/app/ui/globals.css";
import Image from "next/image";
import Paragraph from "@/app/ui/components/Paragraph";
import SearchBar from "@/app/ui/components/SearchBar";
import { Icons } from "@/app/ui/icons";

const Page = () => {
  return (
    <div className="mx-4 my-3 md:mx-16 md:my-9 xl:mx-24">
      <Image
        src="/img/CatwikiLogo.svg"
        width={130}
        height={40}
        alt="Welcome to Catwiki"
      />

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

      <div className="bg-westar x:py-12 text-cannonBlack rounded-b-3xl p-6 xl:px-24">
        <Paragraph
          kind="p"
          css="text-sm font-semibold md:text-lg"
          content="Most Researched Breeds"
        />

        <div className="flex flex-col justify-center md:flex-row md:justify-between">
          <Paragraph
            kind="p"
            css="mt-10 max-w-96 text-xl md:text-2xl xl:text-4xl font-bold"
            content="66+ Breeds For You to discover"
          />

          <div className="flex gap-2 md:self-end">
            <Paragraph
              kind="p"
              css="mt-4 md:mt-0 md:self-end uppercase"
              content="see more"
            />
            <Icons.arrowRight className="mt-4 self-center md:mt-0" />
          </div>
        </div>
      </div>

      <div className="text-cannonBlack mx-6 my-20 flex flex-col justify-between xl:mx-24 xl:flex-row">
        <div className="self-center xl:max-w-80">
          <h2 className="text-4xl font-bold">Why should you have a cat?</h2>
          <Paragraph
            kind="p"
            css="mt-10"
            content="Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves"
          />

          <div className="mt-6 flex cursor-pointer gap-2">
            <Paragraph
              kind="p"
              css="mt-4 md:mt-0 md:self-end uppercase font-bold"
              content="read more"
            />
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
    </div>
  );
};

export default Page;
