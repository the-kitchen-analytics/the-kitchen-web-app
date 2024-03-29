import { Grid } from 'semantic-ui-react'
import { MainHeader } from '../../shared/components'
import { UserProfile, SelectAccentColor, ClearCache, DeleteProfile } from './components'
import { fancyColorNames } from '../../shared/utils'

const columns = [
  <MainHeader key={'header'} content={'Настройки'} />,
  <UserProfile key={'profile'} />,
  <SelectAccentColor key={'accentColorSelect'} colorOptions={fancyColorNames} />,
  <ClearCache key={'clearCache'} />,
  <DeleteProfile key={'deleteProfile'} />
]

export const SettingsPage = () => (
  <Grid columns={1}>
    {
      columns.map(column => (
        <Grid.Column key={column.key}>{column}</Grid.Column>
      ))
    }
  </Grid>
)