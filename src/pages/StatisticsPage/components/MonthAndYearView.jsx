import { MonthAndYearFilterLayout } from '../../../components/layouts/'
import { getStatisticsByMonthAndYear } from '../../../services/statisticsDataFilterService'
import { useReceiptsFilteredByDate } from '../../../hooks'
import { Statistics } from './Statistics'
import { getCurrentMonthAndYear } from '../../../utils'

const INITIAL_DATE = getCurrentMonthAndYear()

export const MonthAndYearView = () => {
  const [{
    statisticsData,
    chartData
  }, selectedDate, setSelectedDate] = useReceiptsFilteredByDate(INITIAL_DATE, getStatisticsByMonthAndYear)

  return (
    <MonthAndYearFilterLayout
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    >
      <Statistics
        chartData={chartData}
        statisticsData={statisticsData}
      />
    </MonthAndYearFilterLayout>
  )
}