import { useOutletContext } from 'react-router-dom'
import AllTimeDataLayout from '../../components/layouts/AllTimeDataLayout'
import Statistics from '../../components/Statistics'
import { getAllStatisticsData } from '../../services/statisticsDataFilterService'

const AllTimeStatisticsView = () => {

  const { receipts } = useOutletContext()

  return (
    <AllTimeDataLayout
      icon="chart bar"
    >
      <Statistics
        data={getAllStatisticsData(receipts)}
      />
    </AllTimeDataLayout>
  )
}

export default AllTimeStatisticsView
