import _ from 'lodash'

export const monthIndexes = Object.freeze(_.range(12))

const validateMonthIndex = (monthIndex) => {
  if (!monthIndexes.includes(monthIndex)) {
    throw new Error(`Invalid month index: ${monthIndex}`)
  }

  return monthIndex
}

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

export const getMonthName = (monthIndex) => monthNames[validateMonthIndex(monthIndex)]

export const getFirstDayOfMonth = (month, year) => new Date(year, validateMonthIndex(month), 1)

export const getLastDayOfMonth = (month, year) => new Date(year, month + 1, 0)

export const FIRST_MONTH_INDEX = monthIndexes[0]
export const LAST_MONTH_INDEX = _.last(monthIndexes)