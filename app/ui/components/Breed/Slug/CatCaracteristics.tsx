import { Cat } from "@/app/lib/definitions";
import { catCaracteristics } from "@/app/lib/data";

import Paragraph from "../../Paragraph";

const CatCaracteristics = ({ breed }: { breed: Cat }) => {
  const stars = Array(5).fill(0);

  return (
    <>
      {catCaracteristics.map((caracteristic) => (
        <div className="mt-8" key={caracteristic.name}>
          <div className="flex flex-col md:flex-row">
            <strong className="mr-2">{caracteristic.name}: </strong>

            {caracteristic.rating === false && (
              <Paragraph
                kind="p"
                css="mt-3 md:mt-0"
                content={
                  <>
                    {breed[caracteristic.data]}
                    {caracteristic.name === "Life Span" && " years"}
                  </>
                }
              />
            )}

            {caracteristic.rating === true && (
              <div className="mt-3 flex gap-3 md:mt-0 md:gap-0">
                {stars.map((_, index) => (
                  <div key={index} className="self-center md:ml-5">
                    <div
                      className={`h-[12px] w-[35px] rounded-2xl md:w-[60px] ${breed[caracteristic.data] > index ? "bg-cioccolato" : "bg-alto"}`}
                    ></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default CatCaracteristics;
