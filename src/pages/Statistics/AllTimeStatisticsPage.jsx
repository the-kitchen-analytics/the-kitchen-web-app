import { useOutletContext } from 'react-router-dom'
import { AllTimeDataLayout } from '../../components/layouts/'
import { Statistics } from '../../components/Statistics'
import { getAllData } from '../../services/receiptFilterService'
import {  buildStatisticsData } from '../../utils'

export const AllTimeStatisticsPage = () => {

  const { receipts } = useOutletContext()
  const data = getAllData(receipts)
  const { statisticsData, chartData } = buildStatisticsData(data)

  return (
    <AllTimeDataLayout
      icon="chart bar"
      header="Статистика"
    >
      <Statistics
        chartData={chartData}
        statisticsData={statisticsData}
      />
    </AllTimeDataLayout>
  )
}