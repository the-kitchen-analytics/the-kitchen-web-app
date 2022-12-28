import { Grid } from 'semantic-ui-react'
import DashboardLayout from '../DashboardLayout'

const AllTimeDataLayout = ({ icon, content, children }) => (
  <DashboardLayout
    icon={icon}
    header="За всё время"
    subheader="Ваши данные за всё время"
  >
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