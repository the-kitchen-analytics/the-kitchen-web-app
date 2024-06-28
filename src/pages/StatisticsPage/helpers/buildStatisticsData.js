import _ from 'lodash'
import { formatPrice, calculateTotalWorkerIncome, calculateTotalPrice } from '../../../shared/utils'
import { buildChartData } from './buildChartData'

export const buildStatisticsData = (rawData) => {

  const allProcedures = rawData
    .flat()
    .map(({ procedures }) => procedures)
    .flat()

  const totalWorkerIncome = calculateTotalWorkerIncome(allProcedures)
  const totalWorkerRevenue = calculateTotalPrice(allProcedures)
  const operationCount = rawData.flat().length
  const workedDays = _.uniq(rawData.flat().map(it => it.dateFormatted))
  const daysCount = workedDays.length

  const generalDataStatistics = Object.freeze([
    {
      color: 'yellow',
      name: 'daysCount',
      renderLabel: () => 'Рабочих дней',
      renderValue: () => daysCount
    },
    {
      color: 'teal',
      name: 'operationsCount',
      renderLabel: () => 'Процедур',
      renderValue: () => operationCount
    },
    {
      color: 'green',
      name: 'totalIncome',
      renderLabel: () => 'Заработок',
      renderValue: () => formatPrice(totalWorkerIncome)
    },
    {
      color: 'green',
      name: 'totalRevenue',
      renderLabel: () => 'Выручка',
      renderValue: () => formatPrice(totalWorkerRevenue)
    }
  ])

  const chartData = buildChartData(allProcedures)

  if (daysCount > 1) {
    const averageStatistics = Object.freeze(
      [
        {
          color: 'orange',
          name: 'operationsCountPerDay',
          renderLabel: () => 'Процедур в среднем за день',
          renderValue: () => _.divide(operationCount, daysCount).toFixed(0)
        },
        {
          color: 'blue',
          name: 'incomePerDay',
          renderLabel: () => 'В среднем за день',
          renderValue: () => formatPrice(_.divide(totalWorkerIncome, daysCount))
        },
        {
          color: 'violet',
          name: 'incomePerOperation',
          renderLabel: () => 'В среднем за процедуру',
          renderValue: () => formatPrice(_.divide(totalWorkerIncome, operationCount))
        }
      ]
    )

    return {
      statisticsData: [generalDataStatistics, averageStatistics],
      chartData
    }
  }

  if (daysCount === 1) {
    return {
      statisticsData: [generalDataStatistics],
      chartData
    }
  }

  return {}
}
