import { createContext } from 'react'
import { Loader } from '../../components/shared'
import { useUserDetails } from './useUserDetails'

export const UserDetailsContext = createContext({})
export const UserDetailsContextProvider = ({ uid, children }) => {

  const { userDetails, updateUserDetails, isLoading, error } = useUserDetails(uid)

  if (isLoading) {
    return <Loader content={'Загрузка настроек пользователя'} />
  }

  return (
    <UserDetailsContext.Provider value={[userDetails, updateUserDetails, isLoading, error]}>
      {
        children
      }
    </UserDetailsContext.Provider>
  )
}