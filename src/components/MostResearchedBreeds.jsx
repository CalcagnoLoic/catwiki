import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { ReturnHome } from "./ReturnHome";

export const MostResearchedBreeds = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `https://api.thecatapi.com/v1/breeds?api_key=${
                        import.meta.env.VITE_api_key
                    }`
                );

                let dataDetails = await res.json();
                setData(dataDetails);

                setLoading(false);
            } catch (error) {
                setData(null);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (error) {
        <h1>oops</h1>;
    }

    return (
        <>
            <ReturnHome />
            <h1 className="text-3xl font-extrabold my-5">
                Top 10 most searched breeds
            </h1>
            {loading ? (
                <div className="p-1/2 flex justify-center h-full">
                    <Loader />
                </div>
            ) : (
                <div>
                    {data.map(
                        (breed) =>
                            breed.id === "esho" && (
                                <div className="flex flex-col lg:flex-row py-7 px-5 md:px-12 lg:px-24">
                                    <div className="basis-1/3 flex justify-center ">
                                        <img
                                            src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                                            alt={`${breed.name}`}
                                            className="rounded-xl w-48 h-48 mb-6 lg:mb-0"
                                        />
                                    </div>
                                    <div className="basis-2/3">
                                        <h2 className="mb-5 text-2xl font-bold">
                                            1. {breed.name}
                                        </h2>
                                        <p>{breed.description}</p>
                                    </div>
                                </div>
                            )
                    )}
                    {data.map(
                        (breed) =>
                            breed.id === "ragd" && (
                                <div className="flex flex-col lg:flex-row py-7 px-5 md:px-12 lg:px-24">
                                    <div className="basis-1/3 flex justify-center">
                                        <img
                                            src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                                            alt={`${breed.name}`}
                                            className="rounded-xl w-48 h-48 mb-6 lg:mb-0"
                                        />
                                    </div>
                                    <div className="basis-2/3">
                                        <h2 className="mb-5 text-2xl font-bold">
                                            2. {breed.name}
                                        </h2>
                                        <p>{breed.description}</p>
                                    </div>
                                </div>
                            )
                    )}
                    {data.map(
                        (breed) =>
                            breed.id === "bsho" && (
                                <div className="flex flex-col lg:flex-row py-7 px-5 md:px-12 lg:px-24">
                                    <div className="basis-1/3 flex justify-center">
                                        <img
                                            src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                                            alt={`${breed.name}`}
                                            className="rounded-xl w-48 h-48 mb-6 lg:mb-0"
                                        />
                                    </div>
                                    <div className="basis-2/3">
                                        <h2 className="mb-5 text-2xl font-bold">
                                            3. {breed.name}
                                        </h2>
                                        <p>{breed.description}</p>
                                    </div>
                                </div>
                            )
                    )}
                    {data.map(
                        (breed) =>
                            breed.id === "pers" && (
                                <div className="flex flex-col lg:flex-row py-7 px-5 md:px-12 lg:px-24">
                                    <div className="basis-1/3 flex justify-center">
                                        <img
                                            src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                                            alt={`${breed.name}`}
                                            className="rounded-xl w-48 h-48 mb-6 lg:mb-0"
                                        />
                                    </div>
                                    <div className="basis-2/3">
                                        <h2 className="mb-5 text-2xl font-bold">
                                            4. {breed.name}
                                        </h2>
                                        <p>{breed.description}</p>
                                    </div>
                                </div>
                            )
                    )}
                    {data.map(
                        (breed) =>
                            breed.id === "mcoo" && (
                                <div className="flex flex-col lg:flex-row py-7 px-5 md:px-12 lg:px-24">
                                    <div className="basis-1/3 flex justify-center">
                                        <img
                                            src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                                            alt={`${breed.name}`}
                                            className="rounded-xl w-48 h-48 mb-6 lg:mb-0"
                                        />
                                    </div>
                                    <div className="basis-2/3">
                                        <h2 className="mb-5 text-2xl font-bold">
                                            5. {breed.name}
                                        </h2>
                                        <p>{breed.description}</p>
                                    </div>
                                </div>
                            )
                    )}
                    {data.map(
                        (breed) =>
                            breed.id === "asho" && (
                                <div className="flex flex-col lg:flex-row py-7 px-5 md:px-12 lg:px-24">
                                    <div className="basis-1/3 flex justify-center">
                                        <img
                                            src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                                            alt={`${breed.name}`}
                                            className="rounded-xl w-48 h-48 mb-6 lg:mb-0"
                                        />
                                    </div>
                                    <div className="basis-2/3">
                                        <h2 className="mb-5 text-2xl font-bold">
                                            6. {breed.name}
                                        </h2>
                                        <p>{breed.description}</p>
                                    </div>
                                </div>
                            )
                    )}
                    {data.map(
                        (breed) =>
                            breed.id === "sfol" && (
                                <div className="flex flex-col lg:flex-row py-7 px-5 md:px-12 lg:px-24">
                                    <div className="basis-1/3 flex justify-center">
                                        <img
                                            src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                                            alt={`${breed.name}`}
                                            className="rounded-xl w-48 h-48 mb-6 lg:mb-0"
                                        />
                                    </div>
                                    <div className="basis-2/3">
                                        <h2 className="mb-5 text-2xl font-bold">
                                            7. {breed.name}
                                        </h2>
                                        <p>{breed.description}</p>
                                    </div>
                                </div>
                            )
                    )}
                    {data.map(
                        (breed) =>
                            breed.id === "sphy" && (
                                <div className="flex flex-col lg:flex-row py-7 px-5 md:px-12 lg:px-24">
                                    <div className="basis-1/3 flex justify-center">
                                        <img
                                            src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                                            alt={`${breed.name}`}
                                            className="rounded-xl w-48 h-48 mb-6 lg:mb-0"
                                        />
                                    </div>
                                    <div className="basis-2/3">
                                        <h2 className="mb-5 text-2xl font-bold">
                                            8. {breed.name}
                                        </h2>
                                        <p>{breed.description}</p>
                                    </div>
                                </div>
                            )
                    )}
                    {data.map(
                        (breed) =>
                            breed.id === "abys" && (
                                <div className="flex flex-col lg:flex-row py-7 px-5 md:px-12 lg:px-24">
                                    <div className="basis-1/3 flex justify-center">
                                        <img
                                            src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                                            alt={`${breed.name}`}
                                            className="rounded-xl w-48 h-48 mb-6 lg:mb-0"
                                        />
                                    </div>
                                    <div className="basis-2/3">
                                        <h2 className="mb-5 text-2xl font-bold">
                                            {" "}
                                            9. {breed.name}
                                        </h2>
                                        <p>{breed.description}</p>
                                    </div>
                                </div>
                            )
                    )}
                    {data.map(
                        (breed) =>
                            breed.id === "dons" && (
                                <div className="flex flex-col lg:flex-row py-7 px-5 md:px-12 lg:px-24">
                                    <div className="basis-1/3 flex justify-center">
                                        <img
                                            src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                                            alt={`${breed.name}`}
                                            className="rounded-xl w-48 h-48 mb-6 lg:mb-0"
                                        />
                                    </div>
                                    <div className="basis-2/3">
                                        <h2 className="mb-5 text-2xl font-bold">
                                            10. {breed.name}
                                        </h2>
                                        <p>{breed.description}</p>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            )}
            <ReturnHome />
        </>
    );
};
