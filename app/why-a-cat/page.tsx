import "@/app/ui/globals.css";

import GoBackButton from "@/app/ui/components/GoBackButton";
import Line from "@/app/ui/components/Line";
import { reasonsToHaveCats } from "@/app/lib/data";
import Paragraph from "@/app/ui/components/Paragraph";
import Heading from "@/app/ui/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why a cat?",
  keywords: ["Why should you have a cat?", "benefits", "companions"],
};

const Page = () => {
  return (
    <section className="text-cioccolato">
      <GoBackButton cssPosition="mb-8" />
      <Line cssPosition="mb-5" />
      <Heading
        kind="h1"
        css="text-2xl font-semibold md:text-3xl"
        content="Why Should You Have a Cat?"
      />
      <Paragraph
        kind="p"
        css="mt-5"
        content="Cats have been cherished companions to humans for thousands of years.
      Their independent yet affectionate nature, coupled with their adorable
      antics, makes them a beloved addition to many households. But beyond their
      charm and playful demeanor, having a cat around can offer significant
      mental and physical health benefits. Let’s delve into why you should
      consider sharing your life with a feline friend."
      />

      {reasonsToHaveCats.map((reason) => (
        <article key={reason.id} className="mt-5">
          <Heading
            kind="h2"
            css="text-xl font-semibold underline "
            content={reason.subtitle}
          />

          <blockquote className="mt-3 italic">{reason.explanation}</blockquote>
        </article>
      ))}

      <Line cssPosition="mt-12" />
      <Paragraph
        kind="p"
        css="mt-5"
        content="Incorporating a cat into your life can bring about numerous benefits, from
      reducing stress and anxiety to providing companionship and promoting
      physical activity. The bond you form with your cat can enrich your life in
      countless ways, offering emotional support, encouraging routine, and
      enhancing social interactions. Whether you are looking for a loyal
      companion, a stress reliever, or simply a playful friend, a cat can be the
      perfect addition to your home. So, why not open your heart and home to a
      feline friend and experience the many joys and benefits that come with
      having a cat?"
      />

      <GoBackButton cssPosition="mb-8" />
    </section>
  );
};

export default Page;
