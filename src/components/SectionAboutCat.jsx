import { IconContext } from "react-icons";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import CATSECTION from "../assets/img/catSection.png";

export const SectionAboutCat = () => {
    return (
        <section className="mb-16 py-8 md:mx-24 md:py-20 flex flex-col md:flex-row">
            <div className="self-center">
                <h1 className="text-main-color font-bold text-2xl lg:text-5xl mb-7">
                    Why should you have a cat?
                </h1>
                <p className="text-main-color md:text-2xl md:w-1/2 mb-7">
                    Having a cat around you can actually trigger the release of
                    calming chemicals in your body which lower your stress and
                    anxiety leves
                </p>
                <div className="flex gap-3 cursor-pointer">
                    <p className="self-center text-secondary-color uppercase hidden md:block">
                        read more
                    </p>
                    <IconContext.Provider
                        value={{
                            style: { color: "rgba(41, 21, 7, 0.6)" },
                        }}
                    >
                        <HiOutlineArrowNarrowRight className="self-center hidden md:block" />
                    </IconContext.Provider>
                </div>
            </div>
            <div><img src={CATSECTION} alt="" /></div>
        </section>
    );
};
