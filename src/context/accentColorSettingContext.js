import { createContext, useState } from "react";
import { getRandomFancyColorName } from "../utils/ColorUtils";

const AccentColorSetingContext = createContext();

const AccentColorSetingContextProvider = ({ children }) => {
    const [accentColor, setAccentColor] = useState(localStorage.getItem('accentColor') || getRandomFancyColorName());

    const setAccentColorWrapper = (colorName) => {
        if (colorName !== accentColor) {
            setAccentColor(colorName)
            localStorage.setItem('accentColor', colorName)
        }
    }

    return (
        <AccentColorSetingContext.Provider value={{ accentColor, setAccentColor: setAccentColorWrapper }}>
            {
                children
            }
        </AccentColorSetingContext.Provider>
    )
}

export { AccentColorSetingContext, AccentColorSetingContextProvider };