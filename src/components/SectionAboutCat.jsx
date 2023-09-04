import CATSECTION from "../assets/img/catSection.png";
import { darkModeContext } from "../context/ThemeProvider";
import { useContext } from "react";

export const SectionAboutCat = () => {
    const { darkMode } = useContext(darkModeContext);

    return (
        <section className="mb-16 py-8 md:mx-24 md:py-20 flex flex-col md:flex-row">
            <div className="self-center">
                <h1
                    className={`${
                        darkMode ? "text-main-color" : "text-white"
                    } font-bold text-2xl lg:text-5xl mb-7 `}
                >
                    Why should you have a cat?
                </h1>
                <p
                    className={`${
                        darkMode ? "text-main-color" : "text-white"
                    }  mr-3 md:text-2xl lg:w-2/3 mb-7 `}
                >
                    Having a cat around you can actually trigger the release of
                    calming chemicals in your body which lower your stress and
                    anxiety leves
                </p>
                <div className="flex gap-3 cursor-pointer">
                    <p
                        className={` ${
                            darkMode ? "text-main-color" : "text-white"
                        } self-center uppercase hidden md:block `}
                    >
                        read more &#8594;
                    </p>
                </div>
            </div>
            <div className="flex">
                <img src={CATSECTION} alt="" className="self-center" />
            </div>
        </section>
    );
};
