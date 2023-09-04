import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `${url}${import.meta.env.VITE_api_key}`
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
    }, [url]);

    return { data, loading, error };
};
