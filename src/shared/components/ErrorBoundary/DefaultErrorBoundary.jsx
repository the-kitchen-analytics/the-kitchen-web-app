import { ButtonGroup, ErrorMessage, GoBackButton, GoHomeButton } from '../'
import { Grid, Segment } from 'semantic-ui-react'
import { useRouteError } from 'react-router-dom'

const buttons = [
  {
    as: GoBackButton
  },
  {
    as: GoHomeButton,
  }
]

export const DefaultErrorBoundary = () => {
  const error = useRouteError()
  console.debug(error)

  return (
    <Grid columns={1} padded>
      <Grid.Column>
      </Grid.Column>

      <Grid.Column>
        <ErrorMessage
          icon={'exclamation circle'}
          attached
          content={error.toLocaleString()}
        />
        <Segment attached={'bottom'}>
          <ButtonGroup
            buttons={buttons}
          />
        </Segment>
      </Grid.Column>
    </Grid>
  )
}