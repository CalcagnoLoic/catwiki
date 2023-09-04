import { ReturnHome } from "./ReturnHome";
import { Rating } from "./Rating";
import { Loader } from "./Loader";
import { useParams } from "react-router-dom";
import { useFetchDetails } from "../hooks/useFetchDetails";
import { darkModeContext } from "../context/ThemeProvider";
import { useContext } from "react";

export const Details = () => {
    const { darkMode } = useContext(darkModeContext);
    const { id } = useParams();

    const { dataCat, dataImg, dataOtherImg, loading, error } = useFetchDetails(
        "https://api.thecatapi.com/v1/breeds/",
        "https://api.thecatapi.com/v1/images/search?breed_ids=",
        "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=",
        id
    );

    if (error) {
        <>
            <h1 className={`${darkMode ? "text-dark" : "text-white"}`}>
                There is a problem, try again later...
            </h1>
            <p className={`${darkMode ? "text-dark" : "text-white"}`}>
                {error}
            </p>
        </>;
    }

    return (
        <div>
            {loading ? (
                <div className="p-1/2 flex justify-center h-full">
                    <Loader />
                </div>
            ) : (
                <>
                    <ReturnHome />

                    <div className="flex flex-col md:flex-row py-7 px-5 md:px-24">
                        <div className="basis-1/3">
                            {dataImg.map((imgOfCat) => (
                                <img
                                    src={imgOfCat.url}
                                    alt={`Cat - ${id}`}
                                    className="rounded-3xl md:w-[80%] mr-5 shadow-xl"
                                    key={imgOfCat.id}
                                />
                            ))}
                        </div>

                        {dataCat.map((data) => (
                            <div
                                className={`${
                                    darkMode ? "text-dark" : "text-white"
                                } basis-2/3 `}
                            >
                                <h2 className="font-bold text-3xl mb-5 mt-5 md:mt-0">
                                    {data.name}
                                </h2>
                                <p className="mb-5">{data.description}</p>
                                <p className="mb-5">
                                    <span className="font-bold">
                                        Temperament:{" "}
                                    </span>
                                    {data.temperament}
                                </p>
                                <p className="mb-5">
                                    <span className="font-bold">Origin: </span>
                                    {data.origin}
                                </p>
                                <p className="mb-5">
                                    <span className="font-bold">
                                        Life span:{" "}
                                    </span>
                                    {data.life_span} years
                                </p>
                                <p className="mb-5 flex items-center">
                                    <span className="font-bold self-center">
                                        Adaptibility:{" "}
                                    </span>
                                    <Rating ratingVote={data.adaptability} />
                                </p>
                                <p className="mb-5">
                                    <span className="font-bold">
                                        Affection level:{" "}
                                    </span>
                                    <Rating ratingVote={data.affection_level} />
                                </p>
                                <p className="mb-5">
                                    <span className="font-bold">
                                        Child friendly:{" "}
                                    </span>
                                    <Rating ratingVote={data.child_friendly} />
                                </p>
                                <p className="mb-5">
                                    <span className="font-bold">
                                        Dog friendly:{" "}
                                    </span>
                                    <Rating ratingVote={data.dog_friendly} />
                                </p>
                                <p className="mb-5">
                                    <span className="font-bold">
                                        Grooming:{" "}
                                    </span>
                                    <Rating ratingVote={data.grooming} />
                                </p>
                                <p className="mb-5">
                                    <span className="font-bold">
                                        Intelligence:{" "}
                                    </span>
                                    <Rating ratingVote={data.intelligence} />
                                </p>
                                <p className="mb-5">
                                    <span className="font-bold">
                                        Health issues:{" "}
                                    </span>
                                    <Rating ratingVote={data.health_issues} />
                                </p>
                                <p className="mb-5">
                                    <span className="font-bold">
                                        Social needs:{" "}
                                    </span>
                                    <Rating ratingVote={data.social_needs} />
                                </p>
                                <p className="mb-5">
                                    <span className="font-bold">
                                        Stranger friendly:{" "}
                                    </span>
                                    <Rating
                                        ratingVote={data.stranger_friendly}
                                    />
                                </p>
                            </div>
                        ))}
                    </div>

                    <h3
                        className={`${
                            darkMode ? "text-dark" : "text-white"
                        } font-bold text-3xl mb-5 `}
                    >
                        Other photos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-7 gap-5">
                        {dataOtherImg.map((otherImg) => (
                            <div className="flex justify-center">
                                <img
                                    src={otherImg.url}
                                    alt="other images from cat"
                                    className="rounded-3xl w-80 h-80 shadow-lg"
                                    key={otherImg.id}
                                />
                            </div>
                        ))}
                    </div>

                    <ReturnHome />
                </>
            )}
        </div>
    );
};
