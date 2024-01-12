import { useState, useMemo } from 'react'
import { useReceiptContext } from './'

export const useDailyData = (getData) => {
  const { receipts, workedDays } = useReceiptContext()
  const [selectedDay, setSelectedDay] = useState(workedDays[0])

  const filteredData = useMemo(() => {
    if (!receipts || !selectedDay) {
      return []
    }

    return getData(selectedDay, receipts)
  }, [getData, receipts, selectedDay])

  return [
    filteredData,
    workedDays,
    selectedDay,
    setSelectedDay,
  ]
}