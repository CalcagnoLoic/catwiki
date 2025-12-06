import ClientPage from "./ClientPage";

// Page serveur : wrapper pour ton composant client
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <ClientPage slug={resolvedParams.slug} />;
}
