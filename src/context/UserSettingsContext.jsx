import { createContext } from 'react'
import { useLocalStorage } from '../hooks'

const STORAGE_KEY = 'userSettings'
const INITIAL_SETTINGS = Object.freeze({
  accentColor: 'blue',
  size: 'large'
})

export const UserSettingsContext = createContext({})
export const UserSettingsContextProvider = ({ children }) => {

  const [settings, setSettings] = useLocalStorage(STORAGE_KEY, INITIAL_SETTINGS)

  const setSettingsWrapper = (name, value) => {
    setSettings(prevSettings => ({ ...prevSettings, [name]: value }))
  }

  return (
    <UserSettingsContext.Provider
      value={{ settings: { ...settings }, setSetting: setSettingsWrapper }}>
      {
        children
      }
    </UserSettingsContext.Provider>
  )
}