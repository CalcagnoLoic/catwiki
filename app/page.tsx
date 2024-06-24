import "@/app/ui/globals.css";
import Image from "next/image";

const Page = () => {
  return (
    <div className="my-3 md:my-9 mx-4 md:mx-24">
      <Image
        src="/img/CatwikiLogo.svg"
        width={130}
        height={40}
        alt="Welcome to Catwiki"
      />

      <div className="relative">
        <Image
          src="/img/Hero.png"
          alt="Hero Catwiki"
          width={1800}
          height={400}
          className="mt-7 rounded-t-3xl"
        />
        <div className="absolute top-0 xl:ml-24 ml-6">
          <Image
            src="/img/CatwikiLogo.svg"
            width={300}
            height={80}
            alt="Welcome to Catwiki"
            //sizes
            className="invert"
          />
          <p className="text-white text-sm xl:text-2xl max-w-40 md:max-w-72 xl:max-w-none font-medium">
            Get to know more about your cat breed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
