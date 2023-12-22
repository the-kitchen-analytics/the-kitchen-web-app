import _ from 'lodash'
import { useState, useMemo } from 'react'
import { useOutletContext } from 'react-router-dom'

import { getCurrentMonthAndYear } from '../utils/date'

export const useMonthlyData = (getData) => {

  const initialSelectedDate = useMemo(getCurrentMonthAndYear, [])
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate)
  const { receipts, workedYears } = useOutletContext()

  const filteredData = useMemo(() => {
    if (_.isEmpty(receipts) || !_.isInteger(selectedDate.month) || !_.isInteger(selectedDate.year)) {
      return []
    }

    return getData(selectedDate.month, selectedDate.year, receipts)
  }, [receipts, selectedDate.month, selectedDate.year, getData])

  return [
    filteredData,
    workedYears,
    initialSelectedDate,
    selectedDate,
    setSelectedDate,
  ]
}