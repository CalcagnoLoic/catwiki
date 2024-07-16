import { mostResearchedBreed } from "@/app/lib/definitions";
import Image from "next/image";
import Paragraph from "../../Paragraph";
import Heading from "../../Heading";

const MostResearchedBreed = ({ breed, index }: mostResearchedBreed) => {
  return (
    <div className="mt-12 flex flex-col md:flex-row md:gap-12">
      <div className="relative left-1/2 h-[200px] w-[200px] -translate-x-1/2 md:left-0 md:-translate-x-0">
        <Image
          alt={breed.name}
          src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
          fill
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="mt-5 md:mt-0 md:w-2/3 xl:w-4/5">
        <Heading
          kind="h2"
          css="text-2xl font-bold text-cioccolato md:text-3xl"
          content={`${index}. ${breed.name}`}
        />
        <Paragraph
          kind="p"
          css="mt-6 text-cioccolato"
          content={breed.description}
        />
      </div>
    </div>
  );
};

export default MostResearchedBreed;
