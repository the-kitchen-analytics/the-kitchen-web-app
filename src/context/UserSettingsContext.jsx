import { createContext } from 'react'
import { useApplicationSettings, useColorNames, useLocalStorage } from '../hooks'

const UserSettingsContext = createContext()

const UserSettingsContextProvider = ({ children }) => {

  const { getRandomFancyColorName } = useColorNames()
  const { settings: systemSettings } = useApplicationSettings()

  const [settings, setSettings] = useLocalStorage('userSettings', {
    accentColor: getRandomFancyColorName(),
  })

  const setSettingsWrapper = (name, value) => {
    setSettings(prevSettings => ({ ...prevSettings, [name]: value }))
  }

  return (
    <UserSettingsContext.Provider
      value={{ settings: { ...systemSettings, ...settings }, setSetting: setSettingsWrapper }}>
      {
        children
      }
    </UserSettingsContext.Provider>
  )
}

export { UserSettingsContext, UserSettingsContextProvider }