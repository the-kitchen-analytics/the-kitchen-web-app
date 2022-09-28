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
                const receiptsByDay = _.groupBy(receipts, 'dateFormatted');
                const workedDays = Object.keys(receiptsByDay);

                setData({
                    receipts,
                    receiptsByDay,
                    workedDays,
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