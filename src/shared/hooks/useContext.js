import { useContext } from 'react'
import { ReceiptContext, UserDetailsContext, UserSettingsContext } from '../../context'

export const useUserDetailsContext = () => useContext(UserDetailsContext)
export const useReceiptContext = () => useContext(ReceiptContext)
export const useUserSettingsContext = () => useContext(UserSettingsContext)