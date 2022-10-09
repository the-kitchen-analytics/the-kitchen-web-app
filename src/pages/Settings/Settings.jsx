import { Grid } from "semantic-ui-react";
import GenericLayout from "../../components/layouts/GenericLayout";
import ClearCache from "./ClearCache.jsx";
import ContactUs from "./ContactUs.jsx";
import SelectAccentColor from "./SelectAccentColorSetting.jsx";
import UserAccountSettings from "./UserAccountSettings.jsx";
import DeleteData from "./DeleteData";
import { useColorNames } from "../../hooks";
import contactOptions from "../../data/contactOptions.json";
import RestoreProceduresData from "./RestoreProceduresData";

const Settings = () => {

    const { fancyColorNames } = useColorNames();

    const settingsOptions = [
        {
            key: 'user-account',
            element: <UserAccountSettings />
        },
        {
            key: 'select-accent-color',
            element: (
                <SelectAccentColor
                    colorOptions={fancyColorNames}
                />
            )
        },
        {
            key: 'contact-us',
            element: (
                <ContactUs
                    options={contactOptions}
                />
            )
        },
        {
            key: 'clear-cache',
            element: <ClearCache />
        },
        {
            key: 'delete-data',
            element: <DeleteData />
        },
        {
            key: 'restore-procedures-data',
            element: <RestoreProceduresData />
        }
    ]

    const content = settingsOptions.map(({ key, element }) => (
        <Grid.Row key={key}>
            <Grid.Column>
                {
                    element
                }
            </Grid.Column>
        </Grid.Row>
    ))

    return (
        <GenericLayout
            icon="settings"
            header="Настройки"
            subheader="Управляйте вашими настройками"
            content={content}
        />
    )
}

export default Settings;