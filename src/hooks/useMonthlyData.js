import _ from 'lodash'
import { useState, useMemo } from 'react'
import { getCurrentMonthAndYear } from '../utils/date'
import { useReceiptContext } from './'

export const useMonthlyData = (getData) => {

  const initialSelectedDate = useMemo(getCurrentMonthAndYear, [])
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate)
  const { receipts, workedYears } = useReceiptContext()

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