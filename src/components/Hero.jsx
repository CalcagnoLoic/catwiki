import CATWIKILOGO from "../assets/img/CatwikiLogo.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IconContext } from "react-icons";
//import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "@material-tailwind/react";
import { MostResearchedBreeds } from "./MostResearchedBreeds";

export const Hero = () => {
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
                <form className="lg:mb-12">
                    <div className="md:hidden">
                        <Input
                            className="rounded-full p-2 px-4 w-1/2 lg:w-1/4 text-black"
                            placeholder="Search"
                        />
                    </div>
                    <div className="hidden md:block">
                        <Input
                            className="rounded-full p-2 px-4 w-1/2 lg:w-1/4 text-black"
                            placeholder="Search"
                        />
                    </div>
                </form>
            </div>
            <div className="bg-slate-300 py-8 lg:py-16 px-12 rounded-b-3xl">
                <p className="text-main-color lg:text-xl mb-5">
                    Most Researched Breeds
                </p>
                <div className="flex justify-between mb-5">
                    <p className="text-main-color font-bold text-2xl lg:text-5xl">
                        66+ Breeds For You to discover
                    </p>
                    <div className="flex gap-3 cursor-pointer">
                        <p className="self-center text-secondary-color uppercase hidden md:block">
                            see more
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
                <MostResearchedBreeds />
            </div>
        </>
    );
};
