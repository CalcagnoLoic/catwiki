import GoBackButton from "./components/GoBackButton";
import Image from "next/image";
import Paragraph from "./components/Paragraph";

const Custom404 = ({ error }: { error: string }) => {
  return (
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
  );
};

export default Custom404;
