import { useOutletContext } from 'react-router-dom'
import { Statistics } from '../../modules'
import { buildStatisticsData } from './helpers'

export const StatisticsPage = () => {
  const { receipts } = useOutletContext()
  return <Statistics {...buildStatisticsData(receipts)} />
}