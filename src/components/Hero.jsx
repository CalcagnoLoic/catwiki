import CATWIKILOGO from "../assets/img/CatwikiLogo.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IconContext } from "react-icons";
import { MostResearchedBreeds } from "./MostResearchedBreeds";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
    const [breeds, setBreed] = useState([]);

    const fetchBreedData = () => {
        fetch(
            `https://api.thecatapi.com/v1/breeds?api_key=${process.env.REACT_APP_api_key}`
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBreed(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchBreedData();
    }, []);

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
                        <select className="rounded-full p-2 px-4 w-1/2 lg:w-1/4 text-black text-sm">
                            <option value="" disabled selected>
                                Select a breed
                            </option>
                            {breeds.map((breed) => (
                                <Link to={`/breed/${breed.id}`}>
                                    <option value={breed.id}>
                                        {breed.name}
                                    </option>
                                </Link>
                            ))}
                        </select>
                    </div>
                    <div className="hidden md:block">
                        <form action="">
                            <select className="rounded-full p-2 px-4 w-1/2 lg:w-1/4 text-black">
                                <option value="" disabled selected>
                                    Select a breed
                                </option>
                                {breeds.map((breed) => (
                                    <option value={breed.id}>
                                        <Link to={`/breed/${breed.id}`}>{breed.name}</Link>
                                    </option>
                                ))}
                            </select>
                        </form>
                    </div>
                </form>
            </div>
            <div className="bg-slate-300 py-8 lg:py-16 px-12 rounded-b-3xl">
                <p className="text-main-color lg:text-xl mb-5">
                    Most Researched Breeds
                </p>
                <div className="flex justify-between mb-5 flex-col md:flex-row gap-5 md:gap-0">
                    <p className="text-main-color font-bold text-2xl lg:text-5xl">
                        66+ Breeds For You to discover
                    </p>
                    <div className="flex gap-3 cursor-pointer">
                        <Link
                            className="self-center text-secondary-color uppercase"
                            to="/most-popular-breed"
                        >
                            see more
                        </Link>
                        <IconContext.Provider
                            value={{
                                style: { color: "rgba(41, 21, 7, 0.6)" },
                            }}
                        >
                            <HiOutlineArrowNarrowRight className="self-center" />
                        </IconContext.Provider>
                    </div>
                </div>
                <MostResearchedBreeds />
            </div>
        </>
    );
};
