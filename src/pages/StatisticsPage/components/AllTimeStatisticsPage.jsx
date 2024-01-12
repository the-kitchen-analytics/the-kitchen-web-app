import { AllTimeDataLayout } from '../../../components/layouts/'
import { getAllData } from '../../../services/receiptFilterService'
import { buildStatisticsData } from '../../../utils'
import { useReceiptContext } from '../../../hooks'
import { Statistics } from './Statistics'

export const AllTimeStatisticsPage = () => {

  const { receipts } = useReceiptContext()
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