import { useState } from 'react'
import { DatePicker } from '../../../shared/components'
import { formatDateForDatePicker, parseDateFromDropdown } from '../../../shared/utils'
import { ReceiptCommonLayout } from '../common'
import { useCarousel, useReceipts } from './hooks'
import { useLastWorkedDayContext } from '../../../shared/hooks'

export const ReceiptDayLayout = () => {
  const initialDate = useLastWorkedDayContext()
  const [date, setDate] = useState(initialDate)
  const [receipts, loading] = useReceipts(date)
  const carouselProps = useCarousel(initialDate, date, setDate)

  return (
    <ReceiptCommonLayout
      dateSelect={{
        loading,
        as: DatePicker,
        maxToday: true,
        value: formatDateForDatePicker(date),
        handleChange: (e, { value }) => setDate(parseDateFromDropdown(value))
      }}
      carousel={carouselProps}
      loading={loading}
      receipts={receipts}
    />
  )
}