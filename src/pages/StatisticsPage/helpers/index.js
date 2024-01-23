import { getAllByDay, getAllByMonthAndYear, getAllByYear } from './../../../domain/receipt'
import { buildStatisticsData } from './buildStatisticsData'

export const getStatisticsByYear = (year, receipts) =>
  buildStatisticsData(getAllByYear(year, receipts))

export const getStatisticsByMonthAndYear = ({ month, year }, receipts) =>
  buildStatisticsData(getAllByMonthAndYear({ month, year }, receipts))

export const getStatisticsByDay = (day, groupedData) =>
  buildStatisticsData(getAllByDay(day, groupedData))