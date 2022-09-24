import { createContext } from "react";
import { useColorNames, useLocalStorage } from "../hooks";

const UserSettingsContext = createContext();

const UserSettingsContextProvider = ({ children }) => {

    const { getRandomFancyColorName } = useColorNames()

    const [settings, setSettings] = useLocalStorage('userSettigs', {
        accentColor: getRandomFancyColorName()
    });

    const setSettingsWrapper = (name, value) => {
        setSettings(prevSettings => ({ ...prevSettings, [name]: value }))
    }

    return (
        <UserSettingsContext.Provider value={{ settings, setSetting: setSettingsWrapper }}>
            {
                children
            }
        </UserSettingsContext.Provider>
    )
}

export { UserSettingsContext, UserSettingsContextProvider };