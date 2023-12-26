import _ from 'lodash'

import { formatPrice, calculateTotalWorkerIncome } from '../money'

export const buildStatisticsData = (rawData) => {

  const allProcedures = rawData
    .flat()
    .map(({ procedures }) => procedures)
    .flat()

  const totalWorkerIncome = calculateTotalWorkerIncome(allProcedures)
  const operationCount = rawData.flat().length
  const workedDays = _.uniq(rawData.flat().map(it => it.dateFormatted))
  const daysCount = workedDays.length

  const generalDataStatistics = Object.freeze([
    {
      color: 'yellow',
      name: 'daysCount',
      renderLabel: () => 'Дней отработано',
      renderValue: () => daysCount
    },

    {
      color: 'teal',
      name: 'operationsCount',
      renderLabel: () => 'Процедур произведено',
      renderValue: () => operationCount
    },

    {
      color: 'green',
      name: 'totalIncome',
      renderLabel: () => 'Заработано',
      renderValue: () => formatPrice(totalWorkerIncome)
    }
  ])

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

    return [generalDataStatistics, averageStatistics]
  }

  if (daysCount === 1) {
    return [generalDataStatistics]
  }

  return []
}