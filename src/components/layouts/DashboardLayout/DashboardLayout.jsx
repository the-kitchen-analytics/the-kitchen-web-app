import { Grid, Header } from 'semantic-ui-react'

export const DashboardLayout = ({ header, subheader, icon, content, children }) => (
  <Grid stackable padded>
    <Grid.Row>
      <Grid.Column>
        <Header
          size="huge"
          icon={icon}
          content={header}
          subheader={subheader}
        />
      </Grid.Column>
    </Grid.Row>
    {
      content || children
    }
  </Grid>
)