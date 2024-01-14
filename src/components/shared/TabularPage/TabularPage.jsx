import { Grid, Tab } from 'semantic-ui-react'
import { MainHeader } from '../MainHeader'

export const TabularPage = ({ header, panes }) => {

  const tabularPanes = panes.map((pane) => ({
    ...pane,
    render: () => pane.content
  }))

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <MainHeader {...header} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Tab
            menu={{
              size: 'huge',
              secondary: true,
              widths: panes.length
            }}
            panes={tabularPanes} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}