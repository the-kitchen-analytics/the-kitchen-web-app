import React from "react";
import { Grid } from "semantic-ui-react";
import { fancyColorNames } from "../../../utils/ColorUtils";
import SelectAccentColorSetting from "./SelectAccentColorSetting";


const SettingsView = () => {
    return (
        <Grid.Row>
            <Grid.Column>
                <SelectAccentColorSetting
                    colorOptions={[...fancyColorNames, 'grey', 'black']}
                />
            </Grid.Column>
        </Grid.Row>
    )
}

SettingsView.displayName = 'SettingsView'
export default SettingsView

