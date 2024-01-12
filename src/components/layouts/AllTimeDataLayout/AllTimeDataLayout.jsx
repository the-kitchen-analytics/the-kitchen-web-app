import { Grid } from 'semantic-ui-react'

export const AllTimeDataLayout = ({ content, children }) => (
  <Grid.Row>
    <Grid.Column>
      {
        content || children
      }
    </Grid.Column>
  </Grid.Row>
)