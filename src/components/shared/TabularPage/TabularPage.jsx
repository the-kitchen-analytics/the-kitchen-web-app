import { useUserSettings } from '../../../hooks/index.js'
import { Grid, Header, Tab } from 'semantic-ui-react'

export const TabularPage = ({ header, panes }) => {
  
  const { settings: { accentColor } } = useUserSettings()
  
  const tabularPanes = panes.map((pane) => ({
    ...pane,
    render: () => <Tab.Pane content={pane.content} />
  }))

  return (
    <Grid>
      <Grid.Row stretched>
        <Grid.Column>
          <Header
            size={'huge'}
            {...header}
          />
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