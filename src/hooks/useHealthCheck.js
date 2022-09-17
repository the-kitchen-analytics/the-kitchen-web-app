import { useState, useEffect, useCallback } from "react";

const useHealthCheck = (url) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState();

    const fetchData = useCallback(async () => {

        try {
            setIsLoading(true);
            const response = await fetch(url);

            if (response.ok) {
                setIsSuccess(true);
            } else {
                setError({
                    statusCode: response.status,
                    message: await response.json()
                })
            }

        } catch (e) {
            console.error(e);
            setError({
                message: e.message
            });

        } finally {
            setIsLoading(false);
        }

    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const refresh = useCallback(() => {
        fetchData();
    }, [fetchData])

    return {
        isLoading,
        isSuccess,
        error,
        refresh
    }
}

export default useHealthCheck;