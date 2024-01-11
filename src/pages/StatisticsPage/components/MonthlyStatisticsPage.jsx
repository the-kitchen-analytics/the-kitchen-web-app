import { MonthlyDataLayout } from '../../../components/layouts/'
import { getStatisticsDataByMonthAndYear } from '../../../services/statisticsDataFilterService'
import { useMonthlyData } from '../../../hooks'
import { Statistics } from './Statistics'

export const MonthlyStatisticsPage = () => {
  const [
    { statisticsData, chartData }, yearOptions,
    initialSelectedDate,
    selectedDate, setSelectedDate
  ] = useMonthlyData(getStatisticsDataByMonthAndYear)

  return (
    <MonthlyDataLayout
      yearOptions={yearOptions}
      defaultSelectedDate={initialSelectedDate}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    >
      {
        <Statistics
          chartData={chartData}
          statisticsData={statisticsData}
        />
      }
    </MonthlyDataLayout>
  )
}