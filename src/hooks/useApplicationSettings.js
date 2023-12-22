import { useContext } from 'react'
import { ApplicationSettingsContext } from '../context/ApplicationSettingsContext'

export const useApplicationSettings = () =>  useContext(ApplicationSettingsContext)