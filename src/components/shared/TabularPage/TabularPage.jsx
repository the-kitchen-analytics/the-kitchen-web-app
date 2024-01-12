import { useUserSettingsContext } from '../../../hooks'
import { Grid, Tab } from 'semantic-ui-react'
import { MainHeader } from '../MainHeader'

export const TabularPage = ({ header, panes }) => {

  const { settings: { accentColor } } = useUserSettingsContext()

  const tabularPanes = panes.map((pane) => ({
    ...pane,
    render: () => pane.content
  }))

  return (
    <Grid>
      <Grid.Row stretched>
        <Grid.Column>
          <MainHeader {...header} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={'16'}>
          <Tab
            menu={{
              size: 'large',
              secondary: true,
              pointing: true,
              color: accentColor,
              widths: panes.length
            }}
            panes={tabularPanes} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}