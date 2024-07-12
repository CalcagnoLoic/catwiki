import "@/app/ui/globals.css";

import GoBackButton from "@/app/ui/components/GoBackButton";

const Page = () => {
  return (
    <>
      <GoBackButton cssPosition="" />
      <h1 className="text-cioccolato text-3xl font-semibold mt-5">Top 10 most searched breeds</h1>
      <GoBackButton cssPosition="" />
    </>
  );
};

export default Page;

/* 
persian "id": "pers"
maine coon "id": "mcoo",
siamois "id": "siam",
ragdoll "id": "ragd",
bengal "id": "beng",
sphynx "id": "sphy",
birman "id": "birm",
brithish shortair "id": "bsho",
scottish fold "id": "sfol",
abyssinian "id": "abys",
*/
