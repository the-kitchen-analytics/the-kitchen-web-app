import { useState, useEffect, useCallback, useContext } from "react";
import ApiServiceContext from "../context/ApiServiceContext";

const useHealthCheck = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const { healthCheck } = useContext(ApiServiceContext);
    const [error, setError] = useState();

    const fetchData = useCallback(async () => {

        try {
            setIsLoading(true);
            const response = await healthCheck();

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

    }, [healthCheck]);

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