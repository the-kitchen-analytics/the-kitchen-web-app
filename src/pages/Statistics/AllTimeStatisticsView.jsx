import { useOutletContext } from 'react-router-dom'
import AllTimeDataLayout from '../../components/layouts/AllTimeDataLayout'
import Statistics from '../../components/Statistics'
import { getAllData } from '../../services/receiptFilterService'
import { buildStatisticsData, buildProgressData } from '../../utils/statistics'
import { getProceduresFromReceipts } from '../../utils/procedures'

const AllTimeStatisticsView = () => {

  const { receipts } = useOutletContext()
  const data = getAllData(receipts)
  const procedures = getProceduresFromReceipts(data)
  const statisticsData = buildStatisticsData(data)
  const progressData = buildProgressData(procedures)

  return (
    <AllTimeDataLayout
      icon="chart bar"
      header="Статистика"
    >
      <Statistics
        progressData={progressData}
        statisticsData={statisticsData}
      />
    </AllTimeDataLayout>
  )
}

export default AllTimeStatisticsView
