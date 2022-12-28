import DailyDataLayout from '../../components/layouts/DailyDataLayout/DailyDataLayout'
import Statistics from '../../components/Statistics'
import { getStaisticsDataByDay } from '../../services/statisticsDataFilterService'
import { useDailyData } from '../../hooks'

const DailyStatisticsView = () => {

  const [statisticsData, workedDays, selectedDay, setSelectedDay] = useDailyData(getStaisticsDataByDay)

  return (
    <DailyDataLayout
      icon="chart bar"
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      options={workedDays}
    >
      {

        <Statistics
          data={statisticsData}
        />

      }
    </DailyDataLayout>
  )
}

export default DailyStatisticsView