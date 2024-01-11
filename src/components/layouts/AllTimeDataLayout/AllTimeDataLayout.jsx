import { Grid } from 'semantic-ui-react'
import { MainLayout } from '../'

export const AllTimeDataLayout = ({ content, children }) => (
  <MainLayout>
    <Grid.Row>
      <Grid.Column>
        {
          content || children
        }
      </Grid.Column>
    </Grid.Row>
  </MainLayout>
)