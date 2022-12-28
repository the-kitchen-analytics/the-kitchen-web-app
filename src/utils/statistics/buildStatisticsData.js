import _ from 'lodash'

import Price from '../../components/ui/Price'
import { calculateTotalWorkerIncome } from '../money'

const buildStatisticsData = (rawData) => {

  const allProcedures = rawData
    .flat()
    .map(({ procedures }) => procedures)
    .flat()

  const totalWorkerIncome = calculateTotalWorkerIncome(allProcedures)
  const operationsCount = rawData.flat().length
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
      renderValue: () => operationsCount
    },

    {
      color: 'green',
      name: 'totalIncome',
      renderLabel: () => 'Заработано',
      renderValue: () => (
        <Price euro>
          {
            totalWorkerIncome
          }
        </Price>
      )
    }
  ])

  if (daysCount > 1) {
    const averageStatistics = Object.freeze(
      [
        {
          color: 'orange',
          name: 'operationsCountPerDay',
          renderLabel: () => 'Процедур в среднем за день',
          renderValue: () => (operationsCount / daysCount).toFixed(0)
        },

        {
          color: 'blue',
          name: 'incomePerDay',
          renderLabel: () => 'В среднем за день',
          renderValue: () => (
            <Price euro>
              {
                totalWorkerIncome / daysCount
              }
            </Price>
          )
        },

        {
          color: 'violet',
          name: 'incomePerOperation',
          renderLabel: () => 'В среднем за процедуру',
          renderValue: () => (
            <Price euro>
              {
                totalWorkerIncome / operationsCount
              }
            </Price>
          )
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

export default buildStatisticsData