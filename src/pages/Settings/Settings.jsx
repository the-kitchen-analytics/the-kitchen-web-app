import { Grid } from 'semantic-ui-react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import ClearCache from './ClearCache.jsx'
import SelectAccentColor from './SelectAccentColorSetting.jsx'
import { useColorNames } from '../../hooks'
import UserProfile from '../UserProfile'

const Settings = () => {

  const { fancyColorNames } = useColorNames()

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
      key: 'clear-cache',
      element: <ClearCache />
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
    <DashboardLayout
      icon="settings"
      header="Настройки"
      content={content}
    />
  )
}

export default Settings