import { createContext, useCallback } from 'react'
import { getUserDetailsByUid, updateUserDetails } from '../services/userDetailsService'
import { useFetchData, usePostData } from '../hooks'
import { Loader } from '../components/shared'

const useUserDetails = (uid) => {

  const fetchData = useCallback(() => {
    return getUserDetailsByUid(uid)
  }, [uid])

  const { data: doc, isLoading, refresh } = useFetchData(fetchData)

  const [isUpdating, updateError, update] = usePostData()

  const updateDetails = async (payload) => {
    await update(updateUserDetails, doc.ref, payload)
    refresh()
  }

  return {
    userDetails: isLoading && !doc.empty ? {} : doc.data(),
    updateUserDetails: updateDetails,
    isLoading: isLoading || isUpdating,
    error: updateError,
  }
}

export const UserDetailsContext = createContext({})

export const UserDetailsContextProvider = ({ uid, children }) => {
  
  const { userDetails, updateUserDetails, isLoading, error } = useUserDetails(uid)
  
  if (isLoading) {
    return <Loader content={'Загрузка настроек пользователя'} />
  }

  return (
    <UserDetailsContext.Provider value={[ userDetails, updateUserDetails, isLoading, error ]}>
      {
        children
      }
    </UserDetailsContext.Provider>
  )
}