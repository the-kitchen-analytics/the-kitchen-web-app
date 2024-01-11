import { MonthlyDataLayout } from '../../../components/layouts/'
import { Statistics } from '../../../components/Statistics'
import { getStatisticsDataByMonthAndYear } from '../../../services/statisticsDataFilterService'
import { useMonthlyData } from '../../../hooks'

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