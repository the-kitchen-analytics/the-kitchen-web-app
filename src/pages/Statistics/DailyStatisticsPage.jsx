import { DailyDataLayout } from '../../components/layouts'
import { Statistics } from '../../components/Statistics'
import { getStatisticsDataByDay } from '../../services/statisticsDataFilterService'
import { useDailyData } from '../../hooks'

export const DailyStatisticsPage = () => {

  const [statisticsData, workedDays, selectedDay, setSelectedDay] = useDailyData(getStatisticsDataByDay)

  return (
    <DailyDataLayout
      icon="chart bar"
      header="Статистика"
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      options={workedDays}
    >
      <Statistics
        statisticsData={statisticsData}
      />
    </DailyDataLayout>
  )
}