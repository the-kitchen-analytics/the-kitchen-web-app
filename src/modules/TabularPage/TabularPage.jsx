import { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { MainHeader, Tabs } from '../../shared/components'

export const useTabPanes = (panes, initialIndex = 0) => {
  const [activeTab, setActiveTab] = useState(initialIndex)

  return panes.map((pane, i) => ({
    ...pane,
    active: i === activeTab,
    onClick: () => setActiveTab(i)
  }))
}

export const TabularPage = ({ header, tabs }) => {
  const tabPanes = useTabPanes(tabs)

  return (
    <Grid columns={'1'}>
      <Grid.Column>
        <MainHeader {...header} />
      </Grid.Column>

      <Grid.Column>
        <Tabs tabs={tabPanes} />
      </Grid.Column>
    </Grid>
  )
}