import _ from 'lodash'

export const monthIndexes = Object.freeze(_.range(12))

const buildMonthName = (monthNumber) => {
  const date = new Date()
  date.setMonth(monthNumber)

  return date.toLocaleString('ru', {
    month: 'long',
  })
}

export const monthNames = Object.freeze(
  monthIndexes
    .map(buildMonthName)
    .map(_.capitalize))

export const getMonthName = (monthIndex) => monthNames[monthIndex]

export const FIRST_MONTH_INDEX = monthIndexes[0]
export const LAST_MONTH_INDEX = _.last(monthIndexes)