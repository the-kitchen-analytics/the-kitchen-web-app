import { Grid } from 'semantic-ui-react'
import { MainLayout } from '../'
import { TimelinePicker } from '../../TimelinePicker'

export const AllTimeDataLayout = ({ header, content, children }) => (
  <MainLayout header={header}>
    <Grid.Row>
      <Grid.Column>
        <TimelinePicker />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        {
          content || children
        }
      </Grid.Column>
    </Grid.Row>
  </MainLayout>
)