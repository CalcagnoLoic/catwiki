import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";
import { Rating } from "./Rating";
import { Loader } from "./Loader";

export const Details = () => {
    const [data, setData] = useState([]);
    const [dataImg, setDataImg] = useState([]);
    const [dataOtherImg, setDataOtherImg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `https://api.thecatapi.com/v1/breeds?api_key=${process.env.REACT_APP_api_key}`
                );
                const res_img = await fetch(
                    `https://api.thecatapi.com/v1/images/search?breed_ids=beng`
                );
                const res_other_img = await fetch(
                    `https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=8`
                );

                let dataDetails = await res.json();
                setData(dataDetails);

                let imgDetails = await res_img.json();
                setDataImg(imgDetails);

                let otherImgDetails = await res_other_img.json();
                setDataOtherImg(otherImgDetails);

                setLoading(false);
            } catch (error) {
                setData(null);
                setDataImg(null);
                setDataOtherImg(null);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (error) {
        <>
            <h1>There is a problem, try again later...</h1>
            <p>{error}</p>
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
                    <div className="flex flex-row gap-2 hover:italic hover:underline">
                        <BsBoxArrowLeft className="self-center" />
                        <Link to="/catwiki"> Return to the homepage</Link>
                    </div>

                    <div className="flex flex-col md:flex-row py-7 px-5 md:px-24">
                        <div className="basis-1/3">
                            {dataImg.map((imgOfCat) => (
                                <img
                                    src={imgOfCat.url}
                                    alt="Cat"
                                    className="rounded-3xl md:w-4/5"
                                />
                            ))}
                        </div>
                        {data.map(
                            (data) =>
                                data.id === "beng" && (
                                    <div className="basis-2/3">
                                        <h2 className="font-bold text-3xl mb-5 mt-5 md:mt-0">
                                            {data.name}
                                        </h2>
                                        <p className="mb-5">
                                            {data.description}
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Temperament:{" "}
                                            </span>
                                            {data.temperament}
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Origin:{" "}
                                            </span>
                                            {data.origin}
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Life span:{" "}
                                            </span>
                                            {data.life_span} years
                                        </p>
                                        <p className="mb-5 flex">
                                            <span className="font-bold self-center">
                                                Adaptibility:{" "}
                                            </span>
                                            <Rating
                                                ratingVote={data.adaptability}
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Affection level:{" "}
                                            </span>
                                            <Rating
                                                ratingVote={
                                                    data.affection_level
                                                }
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Child friendly:{" "}
                                            </span>
                                            <Rating
                                                ratingVote={data.child_friendly}
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Dog friendly:{" "}
                                            </span>
                                            <Rating
                                                ratingVote={data.dog_friendly}
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Grooming:{" "}
                                            </span>
                                            <Rating
                                                ratingVote={data.grooming}
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Intelligence:{" "}
                                            </span>
                                            <Rating
                                                ratingVote={data.intelligence}
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Health issues:{" "}
                                            </span>
                                            <Rating
                                                ratingVote={data.health_issues}
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Social needs:{" "}
                                            </span>
                                            <Rating
                                                ratingVote={data.social_needs}
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Stranger friendly:{" "}
                                            </span>
                                            <Rating
                                                ratingVote={
                                                    data.stranger_friendly
                                                }
                                            />
                                        </p>
                                    </div>
                                )
                        )}
                    </div>

                    <h3 className="font-bold text-3xl mb-5">Other photos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-7 gap-5">
                        {dataOtherImg.map((otherImg) => (
                            <div className="flex justify-center">
                                <img
                                    src={otherImg.url}
                                    alt="other images from cat"
                                    className="rounded-3xl object-fill w-80 h-80 gap-5"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-row gap-2 hover:italic hover:underline">
                        <BsBoxArrowLeft className="self-center" />
                        <Link to="/catwiki"> Return to the homepage</Link>
                    </div>
                </>
            )}
        </div>
    );
};
