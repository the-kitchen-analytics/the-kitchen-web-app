import { DailyDataLayout } from '../../../components/layouts'
import { Statistics } from '../../../components/Statistics'
import { getStatisticsDataByDay } from '../../../services/statisticsDataFilterService'
import { useDailyData } from '../../../hooks'

export const DailyStatisticsPage = () => {

  const [{ statisticsData, chartData }, workedDays, selectedDay, setSelectedDay] = useDailyData(getStatisticsDataByDay)

  return (
    <DailyDataLayout
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      options={workedDays}
    >
      <Statistics
        chartData={chartData}
        statisticsData={statisticsData}
      />
    </DailyDataLayout>
  )
}