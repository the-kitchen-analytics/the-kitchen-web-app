import { Grid, Tab } from 'semantic-ui-react'
import { MainHeader } from '../MainHeader'
import { useTheme } from '../../hooks'

const toTabularPane = (pane) => ({
  ...pane,
  render: () => pane.content
})

export const TabularPage = ({ header, panes }) => {
  const theme = useTheme()

  return (
    <Grid columns={'1'}>
      <Grid.Column>
        <MainHeader {...header} />
      </Grid.Column>

      <Grid.Column>
        <Tab
          menu={{
            ...theme,
            pointing: true,
            secondary: true,
            widths: panes.length
          }}
          panes={panes.map(toTabularPane)}
        />
      </Grid.Column>
    </Grid>
  )
}