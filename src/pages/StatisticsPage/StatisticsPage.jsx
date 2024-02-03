import { DayFilterLayout, MonthAndYearFilterLayout, YearFilterLayout } from '../../layouts'
import { TabularPage, Statistics } from '../../modules'
import { getStatisticsByDay, getStatisticsByMonthAndYear, getStatisticsByYear } from './helpers'

export const tabs = [
  {
    name: 'За день',
    content: <DayFilterLayout
      as={Statistics}
      getData={getStatisticsByDay}
    />
  },
  {
    name: 'За месяц',
    content: <MonthAndYearFilterLayout
      as={Statistics}
      getData={getStatisticsByMonthAndYear}
    />
  },
  {
    name: 'За год',
    content: <YearFilterLayout
      as={Statistics}
      getData={getStatisticsByYear}
    />
  }
]

export const StatisticsPage = () => (
  <TabularPage
    header={{ content: 'Статистика' }}
    tabs={tabs}
  />
)