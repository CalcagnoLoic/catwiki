import { Cat } from "@/app/lib/definitions";
import { catCaracteristics } from "@/app/lib/data";
import { Icons } from "@/app/ui/icons";

const CatCaracteristics = ({ breed }: { breed: Cat }) => {
  const stars = Array(5).fill(0);

  return (
    <>
      {catCaracteristics.map((caracteristic) => (
        <div className="mt-8" key={caracteristic.name}>
          <div className="flex">
            <strong className="mr-2">{caracteristic.name}: </strong>
            {caracteristic.rating === false && breed[caracteristic.data]}
            {caracteristic.rating === true &&
              stars.map((_, index) => (
                <div key={index} className="self-center md:ml-5">
                  <div
                    className={`h-[12px] w-[60px] rounded-2xl ${breed[caracteristic.data] > index ? "bg-cioccolato" : "bg-alto"}`}
                  ></div>
                </div>
              ))}
            {caracteristic.name === "Life Span" && " years"}
          </div>
        </div>
      ))}
    </>
  );
};

export default CatCaracteristics;
