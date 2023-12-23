import { getAllData, getDataByDay, getDataByMonthAndYear } from './receiptFilterService'
import { buildStatisticsData } from '../utils'

export const getAllStatisticsData = (groupedData) =>
  buildStatisticsData(getAllData(groupedData))

export const getStatisticsDataByMonthAndYear = (month, year, data) =>
  buildStatisticsData(getDataByMonthAndYear(month, year, data))

export const getStatisticsDataByDay = (day, groupedData) =>
  buildStatisticsData(getDataByDay(day, groupedData))