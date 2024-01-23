import _ from 'lodash'

export const getAllByDay = (selectedDay, data) => {
  const filterFn = ({ dateFormatted }) => dateFormatted === selectedDay
  return filterData(filterFn, data)
}

export const getAllByMonthAndYear = ({ month, year }, data) => {
  const filterFn = ({ date }) => date.getFullYear() === year && date.getMonth() === month
  return filterData(filterFn, data)
}

export const getAllByYear = (year, data) => {
  const filterFn = ({ date }) => date.getFullYear() === year
  return filterData(filterFn, data)
}

const filterData = (filterFn, data) => {
  const result = data
    .flat()
    .filter(filterFn)

  return result ? groupAsArray(result) : result
}

const groupAsArray = (data) => {
  const groupAsObject = (data) => {
    return _.groupBy(data, 'dateFormatted')
  }

  return Object.values(groupAsObject(data))
    .map(dataByDay => _.sortBy(dataByDay, 'dateCreated'))
}