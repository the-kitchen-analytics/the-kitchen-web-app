import { useOutletContext } from 'react-router-dom'
import { AllTimeDataLayout } from '../../../components/layouts/'
import { getAllData } from '../../../services/receiptFilterService'
import { buildStatisticsData } from '../../../utils'
import { Statistics } from './Statistics'

export const AllTimeStatisticsPage = () => {

  const { receipts } = useOutletContext()
  const data = getAllData(receipts)
  const { statisticsData, chartData } = buildStatisticsData(data)

  return (
    <AllTimeDataLayout header="Статистика">
      <Statistics
        chartData={chartData}
        statisticsData={statisticsData}
      />
    </AllTimeDataLayout>
  )
}