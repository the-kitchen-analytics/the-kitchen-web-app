import { useState, useEffect } from "react";
import { streamProcedures } from "../services/proceduresService";


const useProcedures = (workerCategory) => {

    const [procedures, setProcedures] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const convertFirebaseData = (firebaseDataEntry) => {
        const entryData = firebaseDataEntry.data();
        return {
            ...entryData,
            id: firebaseDataEntry.id,
        }
    }

    useEffect(() => {
        const unsubscribe = streamProcedures(
            (querySnapshot) => {
                setIsLoading(true)

                setProcedures(querySnapshot.docs.map(convertFirebaseData))

                setIsLoading(false);
            },
            error => {
                setError(error);
                setIsLoading(false);
            }
        );
        return unsubscribe;
    }, []);

    return procedures;
}

export default useProcedures;