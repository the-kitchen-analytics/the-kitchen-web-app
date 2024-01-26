import { DayFilterLayout, MonthAndYearFilterLayout, YearFilterLayout } from '../../layouts'
import { DataTable } from '../../modules'
import { TabularPage } from '../../shared/components'
import { getTableDataByDay, getTableDataByMonthAndYear, getTableDataByYear } from './helpers'

export const panes = [
  {
    menuItem: 'За день',
    content:
      <DayFilterLayout
        as={DataTable}
        getData={getTableDataByDay}
      />
  },
  {
    menuItem: 'За месяц',
    content: <MonthAndYearFilterLayout
      as={DataTable}
      getData={getTableDataByMonthAndYear}
    />
  },
  {
    menuItem: 'За год',
    content: <YearFilterLayout
      as={DataTable}
      getData={getTableDataByYear}
    />
  }
]

export const TablePage = () => (
  <TabularPage
    header={{ content: 'Главная' }}
    panes={panes}
  />
)