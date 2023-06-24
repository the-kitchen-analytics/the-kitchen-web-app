import { Grid } from 'semantic-ui-react'
import DashboardLayout from '../DashboardLayout'
import TimelinePicker from '../../TimelinePicker'

const AllTimeDataLayout = ({ icon, content, children }) => (
  <DashboardLayout
    icon={icon}
    header="За всё время"
    subheader="Ваши данные за всё время"
  >
    <Grid.Row>
      <Grid.Column>
        <TimelinePicker />
      </Grid.Column>
      <Grid.Column>
        {
          content || children
        }
      </Grid.Column>
    </Grid.Row>
  </DashboardLayout>

)

export default AllTimeDataLayout