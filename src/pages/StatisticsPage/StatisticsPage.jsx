import { TabularPage } from '../../components/shared'
import { AllTimeStatisticsPage, DailyStatisticsPage, MonthlyStatisticsPage } from './pages'

const panes = [
  { menuItem: 'За день', content: <DailyStatisticsPage /> },
  { menuItem: 'За месяц', content: <MonthlyStatisticsPage /> },
  { menuItem: 'За всё время', content: <AllTimeStatisticsPage /> }
]

export const StatisticsPage = () => (
  <TabularPage
    header={{ content: 'Статистика' }}
    panes={panes}
  />
)