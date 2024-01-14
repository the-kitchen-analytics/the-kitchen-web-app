import { useMemo, useState } from 'react'
import { useReceiptContext } from './'

export const useReceiptsFilteredByDate = (initialDate, getData) => {

  const [date, setDate] = useState(initialDate)
  const { receipts } = useReceiptContext()

  const filteredData = useMemo(() => {
    if (!receipts || !date) {
      console.error('Either recipt array or selected date is not valid', receipts, date)
      return []
    }

    return getData(date, receipts)
  }, [getData, receipts, date])

  return [filteredData, date, setDate]
}