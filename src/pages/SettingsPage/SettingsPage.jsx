import { Grid } from 'semantic-ui-react'
import { MainLayout } from '../../components/layouts'
import { SelectAccentColor, ClearCache } from './components'
import { UserProfile } from '../../components/UserProfile'
import { fancyColorNames } from '../../utils'

const settingsOptions = [
  {
    key: 'user-account',
    element: <UserProfile />
  },
  {
    key: 'select-accent-color',
    element: <SelectAccentColor colorOptions={fancyColorNames} />
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

export const SettingsPage = () => (
  <MainLayout
    icon="settings"
    header="Настройки"
    content={content}
  />
)