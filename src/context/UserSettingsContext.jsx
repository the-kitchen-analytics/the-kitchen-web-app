import { createContext } from 'react'
import { useFirstRender, useLocalStorage } from '../hooks'

const LEGACY_STORAGE_KEY = 'userSettings'
const STORAGE_KEY = 'user-settings-v2'
const INITIAL_SETTINGS = Object.freeze({
  accentColor: 'blue',
  size: 'large'
})

export const UserSettingsContext = createContext({})
export const UserSettingsContextProvider = ({ children }) => {

  const [settings, setSettings] = useLocalStorage(STORAGE_KEY, INITIAL_SETTINGS)

  useFirstRender(() => {
    if (window.localStorage.getItem(LEGACY_STORAGE_KEY)) {
      window.localStorage.removeItem(LEGACY_STORAGE_KEY)
    }
  })

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