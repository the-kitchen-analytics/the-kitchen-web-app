import { useContext } from 'react'
import { UserDetailsContext, UserSettingsContext } from '../../context'

export const useUserDetailsContext = () => useContext(UserDetailsContext)
export const useUserSettingsContext = () => useContext(UserSettingsContext)