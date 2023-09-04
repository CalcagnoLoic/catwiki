import { darkModeContext } from "../context/ThemeProvider";
import { useContext } from "react";

export const Banner = () => {
    const { darkMode } = useContext(darkModeContext);

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
                <div className="flex justify-center">
                    <img
                        src="https://cdn2.thecatapi.com/images/a8nIYvs6S.jpg"
                        alt="Savannah"
                        className="w-40 h-40 md:w-80 md:h-80 rounded-3xl my-5 shadow-lg"
                    />
                </div>
                <p
                    className={`${
                        darkMode ? "text-dark" : "text-white"
                    } font-bold text-center  `}
                >
                    Savannah
                </p>
            </div>

            <div>
                <div className="flex justify-center">
                    <img
                        src="https://cdn2.thecatapi.com/images/ai6Jps4sx.jpg"
                        alt="Siamese"
                        className="w-40 h-40 md:w-80 md:h-80 rounded-3xl my-5 shadow-lg"
                    />
                </div>{" "}
                <p
                    className={`${
                        darkMode ? "text-dark" : "text-white"
                    } font-bold text-center  `}
                >
                    Siamese
                </p>
            </div>

            <div>
                <div className="flex justify-center">
                    <img
                        src="https://cdn2.thecatapi.com/images/06dgGmEOV.jpg"
                        alt="Norwegian Forest Cat"
                        className="w-40 h-40 md:w-80 md:h-80 rounded-3xl my-5 shadow-lg"
                    />
                </div>
                <p
                    className={`${
                        darkMode ? "text-dark" : "text-white"
                    } font-bold text-center  `}
                >
                    Norwegian Forest Cat
                </p>
            </div>

            <div>
                <div className="flex justify-center">
                    <img
                        src="https://cdn2.thecatapi.com/images/j6oFGLpRG.jpg"
                        alt="Chartreux"
                        className="w-40 h-40 md:w-80 md:h-80 rounded-3xl my-5 shadow-lg"
                    />
                </div>
                <p
                    className={`${
                        darkMode ? "text-dark" : "text-white"
                    } font-bold text-center  `}
                >
                    Chartreux
                </p>
            </div>
        </div>
    );
};
