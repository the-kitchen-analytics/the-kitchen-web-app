import { useCallback } from 'react'
import { buildStatisticsData } from '../utils/statistics'

const useStatisticsFilters = ({ getAllData, getDataByDay, getDataByMonthAndYear }) => {

  const getAllStatisticsData = useCallback(() => buildStatisticsData(getAllData()), [getAllData])

  const getStatisticsDataByMonthAndYear = useCallback((month, year) =>
    buildStatisticsData(getDataByMonthAndYear(month, year)), [getDataByMonthAndYear])

  const getStatisticsDataByDay = useCallback((day) =>
    buildStatisticsData(getDataByDay(day)), [getDataByDay])

  return {
    getAllStatisticsData,
    getStatisticsDataByMonthAndYear,
    getStatisticsDataByDay
  }
}

export default useStatisticsFilters