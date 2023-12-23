import { Grid } from 'semantic-ui-react'
import { DashboardLayout } from '../'
import { TimelinePicker } from '../../TimelinePicker'

export const AllTimeDataLayout = ({ icon, header, content, children }) => (
  <DashboardLayout
    icon={icon}
    header={header}
  >
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
  </DashboardLayout>
)