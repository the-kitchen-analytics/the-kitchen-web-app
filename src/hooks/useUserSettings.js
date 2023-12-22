import { useContext } from 'react'
import { UserSettingsContext } from '../context/UserSettingsContext'

export const useUserSettings = () => useContext(UserSettingsContext)