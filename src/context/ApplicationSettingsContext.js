import { createContext, useState } from "react";

const ApplicationSettingsContext = createContext();

const ApplicationSettingsContextProvider = ({ children }) => {

    const [settings, setSettings] = useState({
        controlsSize: 'large',
    });

    const setSettingsWrapper = (name, value) => {
        setSettings(prevSettings => ({ ...prevSettings, [name]: value }))
    }

    return (
        <ApplicationSettingsContext.Provider value={{ settings, setSetting: setSettingsWrapper }}>
            {
                children
            }
        </ApplicationSettingsContext.Provider>
    )
}

export { ApplicationSettingsContext, ApplicationSettingsContextProvider };