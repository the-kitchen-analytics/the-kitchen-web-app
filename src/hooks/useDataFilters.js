import _ from 'lodash'
import { useCallback } from 'react'

export const useDataFilters = (data, groupedData) => {
  const getAllData = useCallback(() => Object.values(groupedData), [groupedData])

  const getDataByDay = useCallback((selectedDay) => {
    const result = groupedData[selectedDay]

    return result || []
  }, [groupedData])

  const getDataByMonthAndYear = useCallback((selectedMonth, selectedYear) => {
    const result = data
      .flat()
      .filter(({ date }) => (date.getFullYear() === selectedYear && date.getMonth() === selectedMonth))

    return result ? Object.values(_.groupBy(result, 'dateFormatted')) : result
  }, [data])

  return {
    getAllData,
    getDataByDay,
    getDataByMonthAndYear
  }
}