import React from "react";
import { Grid } from "semantic-ui-react";
import { GenericView } from "../../components/shared/View";
import { fancyColorNames } from "../../data/colorNames";
import ClearCache from "./ClearCache";
import ContactUs from "./ContactUs";
// import ExpectedIncomeForm from "./ExpectedIncomeForm";
// import GoogleApiConfiguration from "./GoogleApiConfiguration";
import SelectAccentColor from "./SelectAccentColorSetting";
import UserAccountSettings from "./UserAccountSettings";

const SettingsView = () => {
    return (
        <GenericView
            icon="settings"
            header="Настройки"
            subheader="Управляйте вашими настройками"
        >
            <Grid.Row>
                <Grid.Column>
                    <UserAccountSettings />
                </Grid.Column>
            </Grid.Row>

            {/* <Grid.Row>
                <Grid.Column>
                    <GoogleApiConfiguration />
                </Grid.Column>
            </Grid.Row> */}

            {/* <Grid.Row>
                <Grid.Column>
                    <ExpectedIncomeForm />
                </Grid.Column>
            </Grid.Row> */}

            <Grid.Row>
                <Grid.Column>
                    <SelectAccentColor
                        colorOptions={[...fancyColorNames, 'grey', 'black']}
                    />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <ContactUs />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <ClearCache />
                </Grid.Column>
            </Grid.Row>
        </GenericView>
    )
}

SettingsView.displayName = 'SettingsView'
export default SettingsView

