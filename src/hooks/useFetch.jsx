const useFetch = (url, initialData = null) => {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setData(initialData); // Reset data to initial state before fetching

                const response = await fetchDataFromApi(url);
                setData(response);
            } catch (error) {
                handleError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, initialData]);

    const handleError = (error) => {
        if (error.response) {
            setError(`Request failed with status: ${error.response.status}`);
        } else if (error.request) {
            setError("Network error. Please try again.");
        } else {
            setError("Something went wrong!");
        }
    };

    return { data, loading, error, refetch: fetchData }; // Expose refetch function
};
