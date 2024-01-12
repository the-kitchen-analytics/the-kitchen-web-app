import { Grid } from 'semantic-ui-react'
import { MainHeader } from '../../components/shared'
import { UserProfile, SelectAccentColor, ClearCache } from './components'
import { fancyColorNames } from '../../utils'

export const SettingsPage = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column>
        <MainHeader content={'Настройки'} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <UserProfile />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <SelectAccentColor colorOptions={fancyColorNames} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <ClearCache />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)