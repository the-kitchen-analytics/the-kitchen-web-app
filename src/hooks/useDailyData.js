import { useState, useMemo } from 'react'
import { useOutletContext } from 'react-router-dom'

const useDailyData = (getData) => {
  const { receipts, workedDays } = useOutletContext()
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

export default useDailyData