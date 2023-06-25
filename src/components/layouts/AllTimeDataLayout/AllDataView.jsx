import { Grid } from 'semantic-ui-react'
import DashboardLayout from '../DashboardLayout'
import TimelinePicker from '../../TimelinePicker'

const AllTimeDataLayout = ({ icon, header, content, children }) => (
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

export default AllTimeDataLayout