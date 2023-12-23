import { Grid, Segment } from 'semantic-ui-react'
import { ErrorMessage } from '../../shared'
import { FormLayoutHeader } from './FormLayoutHeader'

export const FormLayout = ({ title, subheader, error, children }) => (
  <Grid>
    <Grid.Row centered>
      <Grid.Column mobile={16} computer={6}>
        <Segment padded>
          <FormLayoutHeader
            title={title}
            subheader={subheader}
          />
          {
            error && <ErrorMessage message={error.message} />
          }
          {
            children
          }
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)