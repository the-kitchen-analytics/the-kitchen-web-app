import { useCallback, useState } from 'react'
import { DatePicker, Loader } from '../../../shared/components'
import { atStartDay, formatDateForDatePicker, getCurrentDate, parseDateFromDropdown } from '../../../shared/utils'
import { DefaultLayout } from '../common'
import { useReceipts } from './hooks'
import { useFetchData, useUserDetailsContext } from '../../../shared/hooks'
import { getLastWorkedDay } from '../../../domain/receipt'

const INITIAL_DATE = atStartDay(getCurrentDate())

const ReceiptDayLayoutBody = ({ lastWorkedDay }) => {
  const [date, setDate] = useState(lastWorkedDay)
  const [receipts, loading] = useReceipts(date)

  const carouselProps = {
    leftButton: {
      disabled: true,
      onClick: () => setDate(lastWorkedDay)
    },
    resetButton: {
      content: 'Последний день',
      disabled: date === lastWorkedDay,
      onClick: () => setDate(lastWorkedDay)
    },
    rightButton: {
      disabled: true,
      onClick: () => setDate(lastWorkedDay)
    }
  }

  return (
    <DefaultLayout
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

export const ReceiptDayLayout = () => {
  const [{ uid }] = useUserDetailsContext()
  const fetchLastWorkedDay = useCallback(() => getLastWorkedDay(uid), [uid])
  const [lastWorkedDay, loading] = useFetchData(fetchLastWorkedDay)

  if (loading) {
    return <Loader
      indeterminate
      content={'Поиск последнего рабочего дня'}
    />
  }

  const value = lastWorkedDay
    ? atStartDay(lastWorkedDay)
    : INITIAL_DATE

  return <ReceiptDayLayoutBody lastWorkedDay={value} />
}