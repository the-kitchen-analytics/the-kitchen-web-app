import { Grid } from 'semantic-ui-react'
import { MainHeader } from '../../shared/index'

export const MainLayout = ({ header, content, children }) => (
  <Grid>
    {
      header && (
        <Grid.Row>
          <Grid.Column width={'16'}>
            <MainHeader {...header} />
          </Grid.Column>
        </Grid.Row>
      )
    }
    {
      content || children
    }
  </Grid>
)