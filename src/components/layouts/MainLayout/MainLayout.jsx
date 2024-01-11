import { Grid, Header } from 'semantic-ui-react'

export const MainLayout = ({ header, subheader, content, children }) => (
  <Grid>
    {
      header && (
        <Grid.Row>
          <Grid.Column width={'16'}>
            <Header
              as={'h1'}
              size={'huge'}
              content={header}
              subheader={subheader}
            />
          </Grid.Column>
        </Grid.Row>
      )
    }
    {
      content || children
    }
  </Grid>
)