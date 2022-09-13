import { useCallback, useState, useEffect } from "react"


const useFetchData = (fetchFunction) => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [hasError, setHasError] = useState(false);

    const fetchData = useCallback(async () => {

        try {
            setIsLoading(true);
            const fetchedData = await fetchFunction();
            setData(fetchedData);

        } catch (e) {
            console.error(e);
            setHasError(true);

        } finally {
            setIsLoading(false);
        }

    }, [fetchFunction]);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const refresh = useCallback(() => {
        fetchData();
    }, [fetchData])

    return {
        isLoading,
        data,
        hasError,
        refresh
    }
}

export default useFetchData;