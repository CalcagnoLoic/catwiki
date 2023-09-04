import { useEffect, useState } from "react";

export const useFetchOption = (url) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let arr = [];
            try {
                const res = await fetch(
                    `${url}${import.meta.env.VITE_api_key}`
                );
                let data = await res.json();
                data.map((cat) => {
                    return arr.push({ value: cat.id, label: cat.name });
                });
                setOptions(arr);
            } catch (error) {
                setOptions(null);
                console.log(error);
            }
        };

        getData();
    }, [url]);

    return { options };
};
