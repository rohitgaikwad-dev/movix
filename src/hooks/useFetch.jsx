import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setData(null);
                setError(null);

                const response = await fetchDataFromApi(url);
                setData(response);
            } catch (error) {
                if (error.response) {
                    setError(`Request failed with status: ${error.response.status}`);
                } else if (error.request) {
                    setError("Network error. Please try again.");
                } else {
                    setError("Something went wrong!");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
