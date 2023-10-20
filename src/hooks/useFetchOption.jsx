import { useEffect, useState } from "react";

export const useFetchOption = (url) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const getData = async () => {
            //let arr = [];
            try {
                const res = await fetch(
                    `${url}${import.meta.env.VITE_api_key}`
                );
                let data = await res.json();

                const dataObj = data.map((cat) =>
                    setOptions({ value: cat.id, label: cat.name })
                );

                return dataObj;
            } catch (error) {
                setOptions(null);
                console.log(error);
            }
        };

        getData();
    }, [url]);

    return { options };
};
