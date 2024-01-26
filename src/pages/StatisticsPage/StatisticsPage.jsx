import { DayFilterLayout, MonthAndYearFilterLayout, YearFilterLayout } from '../../layouts'
import { TabularPage } from '../../shared/components'
import { Statistics } from '../../modules'
import { getStatisticsByDay, getStatisticsByMonthAndYear, getStatisticsByYear } from './helpers'

export const panes = [
  {
    menuItem: 'За день',
    content: <DayFilterLayout
      as={Statistics}
      getData={getStatisticsByDay}
    />
  },
  {
    menuItem: 'За месяц',
    content: <MonthAndYearFilterLayout
      as={Statistics}
      getData={getStatisticsByMonthAndYear}
    />
  },
  {
    menuItem: 'За год',
    content: <YearFilterLayout
      as={Statistics}
      getData={getStatisticsByYear}
    />
  }
]

export const StatisticsPage = () => (
  <TabularPage
    header={{ content: 'Статистика' }}
    panes={panes}
  />
)