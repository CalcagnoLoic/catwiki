import { ReactNode } from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
