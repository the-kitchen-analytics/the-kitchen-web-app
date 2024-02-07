import { TabMenu } from './TabMenu'
import { TabPane } from './TabPane'
import './Tabs.css'

export const Tabs = ({ tabs }) => (
  <div className="tabs">
    <TabMenu tabs={tabs} />
    <TabPane tabs={tabs} />
  </div>
)
