import { createContext } from "react";
import { useLocalStorage } from "../hooks";
import { getRandomFancyColorName } from "../utils/ui";

const UserSettingsContext = createContext();

const UserSettingsContextProvider = ({ children }) => {

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