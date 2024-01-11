import { TabularPage } from '../../components/shared'
import { DailyTablePage, MonthlyTablePage, AllTimeTablePage } from './pages'

const panes = [
  { menuItem: 'За день', content: <DailyTablePage /> },
  { menuItem: 'За месяц', content: <MonthlyTablePage /> },
  { menuItem: 'За всё время', content: <AllTimeTablePage /> }
]

export const TablePage = () => (
  <TabularPage
    header={{ content: 'Главная' }}
    panes={panes}
  />
)