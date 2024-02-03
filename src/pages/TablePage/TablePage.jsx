import { DayFilterLayout, MonthAndYearFilterLayout, YearFilterLayout } from '../../layouts'
import { TabularPage, DataTable } from '../../modules'
import { getTableDataByDay, getTableDataByMonthAndYear, getTableDataByYear } from './helpers'

export const tabs = [
  {
    name: 'За день',
    content: <DayFilterLayout
      as={DataTable}
      getData={getTableDataByDay}
    />
  },
  {
    name: 'За месяц',
    content: <MonthAndYearFilterLayout
      as={DataTable}
      getData={getTableDataByMonthAndYear}
    />
  },
  {
    name: 'За год',
    content: <YearFilterLayout
      as={DataTable}
      getData={getTableDataByYear}
    />
  }
]

export const TablePage = () => (
  <TabularPage
    header={{ content: 'Главная' }}
    tabs={tabs}
  />
)