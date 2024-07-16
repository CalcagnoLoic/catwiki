import { Metadata } from "next";
import Page from "./page";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const { slug } = params;
  return {
    title: `${slug}`,
  };
}

export default Page;
