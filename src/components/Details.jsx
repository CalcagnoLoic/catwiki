import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";
import StarRatings from "react-star-ratings";

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
                    <div role="status">
                        <svg
                            aria-hidden="true"
                            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex flex-row gap-2 hover:italic hover:underline">
                        <BsBoxArrowLeft className="self-center" />
                        <Link to="/catwiki"> Return to the home</Link>
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
                                            <StarRatings
                                                numberOfStars={5}
                                                rating={data.adaptability}
                                                starRatedColor="rgba(84, 68, 57, 1)"
                                                starDimension="20px"
                                                starSpacing="5px"
                                                className="self-center"
                                                name="rating"
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Affection level:{" "}
                                            </span>
                                            <StarRatings
                                                numberOfStars={5}
                                                rating={data.affection_level}
                                                starRatedColor="rgba(84, 68, 57, 1)"
                                                starDimension="20px"
                                                starSpacing="5px"
                                                className="self-center"
                                                name="rating"
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Child friendly:{" "}
                                            </span>
                                            <StarRatings
                                                numberOfStars={5}
                                                rating={data.child_friendly}
                                                starRatedColor="rgba(84, 68, 57, 1)"
                                                starDimension="20px"
                                                starSpacing="5px"
                                                className="self-center"
                                                name="rating"
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Dog friendly:{" "}
                                            </span>
                                            <StarRatings
                                                numberOfStars={5}
                                                rating={data.dog_friendly}
                                                starRatedColor="rgba(84, 68, 57, 1)"
                                                starDimension="20px"
                                                starSpacing="5px"
                                                className="self-center"
                                                name="rating"
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Grooming:{" "}
                                            </span>
                                            <StarRatings
                                                numberOfStars={5}
                                                rating={data.grooming}
                                                starRatedColor="rgba(84, 68, 57, 1)"
                                                starDimension="20px"
                                                starSpacing="5px"
                                                className="self-center"
                                                name="rating"
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Intelligence:{" "}
                                            </span>
                                            <StarRatings
                                                numberOfStars={5}
                                                rating={data.intelligence}
                                                starRatedColor="rgba(84, 68, 57, 1)"
                                                starDimension="20px"
                                                starSpacing="5px"
                                                className="self-center"
                                                name="rating"
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Health issues:{" "}
                                            </span>
                                            <StarRatings
                                                numberOfStars={5}
                                                rating={data.health_issues}
                                                starRatedColor="rgba(84, 68, 57, 1)"
                                                starDimension="20px"
                                                starSpacing="5px"
                                                className="self-center"
                                                name="rating"
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Social needs:{" "}
                                            </span>
                                            <StarRatings
                                                numberOfStars={5}
                                                rating={data.social_needs}
                                                starRatedColor="rgba(84, 68, 57, 1)"
                                                starDimension="20px"
                                                starSpacing="5px"
                                                className="self-center"
                                                name="rating"
                                            />
                                        </p>
                                        <p className="mb-5">
                                            <span className="font-bold">
                                                Stranger friendly:{" "}
                                            </span>
                                            <StarRatings
                                                numberOfStars={5}
                                                rating={data.stranger_friendly}
                                                starRatedColor="rgba(84, 68, 57, 1)"
                                                starDimension="20px"
                                                starSpacing="5px"
                                                className="self-center"
                                                name="rating"
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
                        <Link to="/catwiki"> Return to the home</Link>
                    </div>
                </>
            )}
        </div>
    );
};
