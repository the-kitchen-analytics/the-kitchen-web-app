import { NoContent } from '../NoContent'
import { findOrDefault } from '../../utils'

const defaultPane = { content: <NoContent /> }

export const TabPane = ({ tabs }) => (
  <div className="tab-pane">
    {
      findOrDefault(tabs, ({ active }) => active, defaultPane).content
    }
  </div>
)