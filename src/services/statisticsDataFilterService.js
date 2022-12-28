import { getDataByDay, getAllData, getDataByMonthAndYear } from './receiptFilterService'
import { buildStatisticsData } from '../utils/statistics'

export const getAllStatisticsData = (groupedData) =>
  buildStatisticsData(getAllData(groupedData))

export const getStatisticsDataByMonthAndYear = (month, year, data) =>
  buildStatisticsData(getDataByMonthAndYear(month, year, data))

export const getStaisticsDataByDay = (day, groupedData) =>
  buildStatisticsData(getDataByDay(day, groupedData))