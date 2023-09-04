import CATWIKILOGO from "../assets/img/CatwikiLogo.svg";
import { useFetchOption } from "../hooks/useFetchOption";
import { Link, useNavigate } from "react-router-dom";
import { Banner } from "./Banner";
import { darkModeContext } from "../context/ThemeProvider";
import { useContext } from "react";

export const Hero = () => {
    const { darkMode } = useContext(darkModeContext);

    let navigate = useNavigate();

    const handleNavigate = (value) => {
        navigate(`/catwiki/breed/${value}`);
    };

    const { options } = useFetchOption(
        "https://api.thecatapi.com/v1/breeds?api_key="
    );

    return (
        <>
            <div className="mt-7 bg-hero-sm md:bg-hero-md lg:bg-hero-lg rounded-t-3xl py-8 lg:py-16 px-12 bg-no-repeat bg-cover bg-center  lg:bg-left">
                <img
                    src={CATWIKILOGO}
                    alt="Catwiki, the website for cats"
                    className="invert fill-white mb-5 lg:mb-10 lg:w-[20%] "
                />
                <p className="text-white text-xl lg:text-2xl w-1/2 lg:w-1/5 mb-5 lg:mb-10">
                    Get to know more about your cat breed
                </p>

                <div>
                    <select
                        onChange={(e) => handleNavigate(e.target.value)}
                        className="px-4 py-2 rounded"
                    >
                        <option>Search...</option>
                        {options.map((cat, index) => (
                            <option value={cat.value} key={index}>
                                {cat.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div
                className={`${
                    darkMode ? "bg-slate-300" : "bg-slate-500"
                }  py-8 lg:py-16 px-12 rounded-b-3xl shadow-lg `}
            >
                <p
                    className={`${
                        darkMode ? "text-main-color" : "text-white"
                    } lg:text-xl mb-5 flex gap-3 `}
                >
                    Most Researched Breeds
                </p>
                <div className="flex justify-between mb-5 flex-col md:flex-row gap-5 md:gap-0">
                    <p
                        className={`${
                            darkMode ? "text-main-color" : "text-white"
                        } font-bold text-2xl lg:text-5xl `}
                    >
                        66+ Breeds For You to discover
                    </p>

                    <div className="flex gap-3 cursor-pointer">
                        <p
                            className="self-center text-secondary-color uppercase"
                            to="/most-popular-breed"
                        >
                            <Link
                                to="/catwiki/most-researched-breeds"
                                className={`${
                                    darkMode ? "text-main-color" : "text-white"
                                }`}
                            >
                                see the 10 most researched breeds &#8594;
                            </Link>
                        </p>
                    </div>
                </div>

                <Banner />
            </div>
        </>
    );
};
