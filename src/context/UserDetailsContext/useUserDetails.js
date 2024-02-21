import { useCallback } from 'react'
import { useFetchData, usePostData } from '../../shared/hooks'
import { getUserDetailsByUid, updateUserDetails } from '../../domain/user'

export const useUserDetails = (uid) => {

  const fetchData = useCallback(() => {
    return getUserDetailsByUid(uid)
  }, [uid])

  const [doc, isLoading, getError, refresh] = useFetchData(fetchData)
  const [isUpdating, updateError, update] = usePostData()

  const updateDetails = async (payload) => {
    await update(updateUserDetails, doc.ref, payload)
    refresh()
  }

  return {
    userDetails: isLoading && !doc.empty ? {} : doc.data(),
    updateUserDetails: updateDetails,
    isLoading: isLoading || isUpdating,
    error: getError || updateError,
  }
}