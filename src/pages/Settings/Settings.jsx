import { Grid } from "semantic-ui-react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import ClearCache from "./ClearCache.jsx";
import ContactUs from "./ContactUs.jsx";
import SelectAccentColor from "./SelectAccentColorSetting.jsx";
import contactOptions from "../../data/contactOptions.json";
import Info from "./Info";
import { WithCurrentUser } from "../../hoc";
import AdminSettings from "./AdminSettings";
import { useColorNames } from "../../hooks";
import UserProfile from "../UserProfile";


const InfoWithUser = WithCurrentUser(Info);

const Settings = () => {

    const { fancyColorNames } = useColorNames();

    const settingsOptions = [
        {
            key: 'user-account',
            element: <UserProfile />
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
            key: 'app-info',
            element: <InfoWithUser />
        },
        {
            key: 'clear-cache',
            element: <ClearCache />
        },
        {
            key: 'admin-settings',
            element: <AdminSettings />
        },
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
        <DashboardLayout
            icon="settings"
            header="Настройки"
            subheader="Управляйте настройками приложения"
            content={content}
        />
    )
}

export default Settings;