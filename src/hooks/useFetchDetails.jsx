import { useEffect, useState } from "react";

export const useFetchDetails = (url1, url2, url3, id) => {
    const [dataCat, setDataCat] = useState([]);
    const [dataImg, setDataImg] = useState([]);
    const [dataOtherImg, setDataOtherImg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);

                const res = await fetch(`${url1}${id}`);
                const res_img = await fetch(`${url2}${id}`);
                const res_other_img = await fetch(`${url3}${id}`);

                let dataDetails = await res.json();
                setDataCat([dataDetails]);

                let imgDetails = await res_img.json();
                setDataImg(imgDetails);

                let otherImgDetails = await res_other_img.json();
                setDataOtherImg(otherImgDetails);

                setLoading(false);
            } catch (error) {
                setDataCat(null);
                setDataImg(null);
                setDataOtherImg(null);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [id, url1, url2, url3]);

    return { dataCat, dataImg, dataOtherImg, loading, error };
};
