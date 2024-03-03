import { useState } from 'react'
import { DatePicker } from '../../../shared/components'
import { areDatesEqual, formatDateForDatePicker, parseDateFromDropdown } from '../../../shared/utils'
import { ReceiptCommonLayout } from '../common'
import { useReceipts } from './hooks'
import { useLastWorkedDayContext } from '../../../shared/hooks'

export const ReceiptDayLayout = () => {
  const initialDate = useLastWorkedDayContext()
  const [date, setDate] = useState(initialDate)
  const [receipts, loading] = useReceipts(date)

  const carouselProps = {
    leftButton: {
      disabled: true,
      onClick: () => setDate(initialDate)
    },
    resetButton: {
      content: 'Последний день',
      disabled: areDatesEqual(date, initialDate),
      onClick: () => setDate(initialDate)
    },
    rightButton: {
      disabled: true,
      onClick: () => setDate(initialDate)
    }
  }

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