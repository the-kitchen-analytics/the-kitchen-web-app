import React from "react";
import { Grid } from "semantic-ui-react";
import { GenericView } from "../../components/shared/View";
import { fancyColorNames } from "../../data/colorNames";
import SelectAccentColorSetting from "./SelectAccentColorSetting";


const SettingsView = () => {
    return (
        <GenericView header="Настройки">
            <Grid.Row>
                <Grid.Column>
                    <SelectAccentColorSetting
                        colorOptions={[...fancyColorNames, 'grey', 'black']}
                    />
                </Grid.Column>
            </Grid.Row>
        </GenericView>
    )
}

SettingsView.displayName = 'SettingsView'
export default SettingsView

