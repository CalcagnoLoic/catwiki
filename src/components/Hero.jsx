import CATWIKILOGO from "../assets/img/CatwikiLogo.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Banner } from "./Banner";
import Select from "react-select";

export const Hero = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let arr = [];
            try {
                const res = await fetch(
                    `https://api.thecatapi.com/v1/breeds?api_key=${process.env.REACT_APP_api_key}`
                );
                let data = await res.json();
                data.map((cat) => {
                    return arr.push({value: cat.id, label: cat.name})
                })
                setOptions(arr);
            } catch (error) {
                setOptions(null);
                console.log(error);
            }
        };

        getData();
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

                <div>
                    <Select
                        options={options}
                        placeholder={"Search..."}
                        getOptionLabel={(options) => options['label']}
                        getOptionValue={(options) => options['value']}
                        className="w-1/2 text-secondary-color bg-black"
                    />
                </div>
            </div>

            <div className="bg-slate-300 py-8 lg:py-16 px-12 rounded-b-3xl">
                <p className="text-main-color lg:text-xl mb-5 flex gap-3">
                    Most Researched Breeds
                </p>
                <div className="flex justify-between mb-5 flex-col md:flex-row gap-5 md:gap-0">
                    <p className="text-main-color font-bold text-2xl lg:text-5xl">
                        66+ Breeds For You to discover
                    </p>

                    <div className="flex gap-3 cursor-pointer">
                        <p
                            className="self-center text-secondary-color uppercase"
                            to="/most-popular-breed"
                        >
                            <Link to="/catwiki/most-researched-breeds">
                                see the 10 most researched breeds
                            </Link>
                        </p>
                        <IconContext.Provider
                            value={{
                                style: { color: "rgba(41, 21, 7, 0.6)" },
                            }}
                        >
                            <HiOutlineArrowNarrowRight className="self-center" />
                        </IconContext.Provider>
                    </div>
                </div>
                <Banner />
            </div>
        </>
    );
};
