import React from "react";
import { fancyColorNames } from "../../../utils/ColorUtils";
import SelectAccentColorSetting from "./SelectAccentColorSetting";


const SettingsView = () => {
    return (
        <div className="view">

            <SelectAccentColorSetting
                colorOptions={fancyColorNames}
            />

        </div>
    )
}

SettingsView.displayName = 'SettingsView'
export default SettingsView

