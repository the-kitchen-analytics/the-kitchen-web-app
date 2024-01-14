import { DayFilterLayout } from '../../../components/layouts'
import { getStatisticsByDay } from '../../../services/statisticsDataFilterService'
import { useReceiptContext, useReceiptsFilteredByDate } from '../../../hooks'
import { Statistics } from './Statistics'

export const DayView = () => {

  const { workedDays } = useReceiptContext()
  const [{
    statisticsData,
    chartData
  }, selectedDay, setSelectedDay] = useReceiptsFilteredByDate(workedDays[0], getStatisticsByDay)

  return (
    <DayFilterLayout
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      options={workedDays}
    >
      <Statistics
        chartData={chartData}
        statisticsData={statisticsData}
      />
    </DayFilterLayout>
  )
}