import _ from 'lodash'

export const monthIndexes = Object.freeze(_.range(12))

const getMonthName = (monthNumber) => {
  const date = new Date()
  date.setMonth(monthNumber)

  return date.toLocaleString('ru', {
    month: 'long',
  })
}

export const monthNames = Object.freeze(
  monthIndexes
    .map(getMonthName)
    .map(_.capitalize))

export const FIRST_MONTH_INDEX = monthIndexes[0]
export const LAST_MONTH_INDEX = _.last(monthIndexes)