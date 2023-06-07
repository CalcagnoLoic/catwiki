import { useEffect, useState } from "react";

export const MostResearchedBreeds = () => {
    const [mostPopular, setMostPopular] = useState([]);

    const fetchData = () => {
        fetch("")
            .then((res) => {
                return res.json();
            })
            .then((data) => setMostPopular(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mostPopular.map(image => (
                <img src={image.url} alt="" />
            ))}
        </div>
    );
};
