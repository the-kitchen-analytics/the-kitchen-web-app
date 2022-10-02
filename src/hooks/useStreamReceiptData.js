import _ from "lodash";
import { useState, useEffect } from "react";
import { streamReceiptsByUid, convertFirebaseData } from "../services/receiptService";

const useStreamReceiptData = (options) => {
    const { uid } = options;

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = streamReceiptsByUid(uid,
            (querySnapshot) => {
                setIsLoading(true);

                const receipts = querySnapshot.docs.map(convertFirebaseData);
                const workedDays = _.uniq(receipts.map(({ dateFormatted }) => dateFormatted));
                const workedYears = _.uniq(receipts.map(({ date }) => date.getFullYear()));

                setData({
                    receipts,
                    workedDays,
                    workedYears,
                });

                setIsLoading(false);
            },
            error => {
                setError(error);
                setIsLoading(false);
            }
        );
        return unsubscribe;
    }, [uid]);

    return [data, isLoading, error];
}

export default useStreamReceiptData;