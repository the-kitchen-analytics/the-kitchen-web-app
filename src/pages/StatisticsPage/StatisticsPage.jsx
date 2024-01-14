import { TabularPage } from '../../components/shared'
import { DayView, MonthAndYearView, YearView } from './components'

const panes = [
  { menuItem: 'За день', content: <DayView /> },
  { menuItem: 'За месяц', content: <MonthAndYearView /> },
  { menuItem: 'За год', content: <YearView /> }
]

export const StatisticsPage = () => (
  <TabularPage
    header={{ content: 'Статистика' }}
    panes={panes}
  />
)