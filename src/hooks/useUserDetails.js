import { useCallback } from "react";
import { getUserDetailsByUid, updateUserDetails } from "../services/userDetailsService";
import useFetchData from "./useFetchData";
import usePostData from "./usePostData";

const useUserDetails = (uid) => {

    const fetchData = useCallback(() => {
        return getUserDetailsByUid(uid);
    }, [uid]);

    const { data: doc, isLoading, refresh } = useFetchData(fetchData);

    const [isUpdating, updateError, update] = usePostData();

    const updateDetails = async (payload) => {
        await update(updateUserDetails, doc.ref, payload)
        refresh();
    }

    return {
        userDetails: isLoading && !doc.empty ? {} : doc.data(),
        updateUserDetails: updateDetails,
        isLoading: isLoading || isUpdating,
        error: updateError,
    }
}

export default useUserDetails;