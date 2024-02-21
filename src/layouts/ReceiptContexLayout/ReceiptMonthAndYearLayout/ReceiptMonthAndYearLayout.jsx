import { useMemo, useState } from 'react'
import { buildDropdownOptions, getCurrentMonthAndYear } from '../../../shared/utils'
import { DefaultLayout } from '../common'
import { MonthAndYearSelect } from './MonthAndYearSelect'
import { useReceipts } from './hooks'
import {
  decrement,
  increment,
  reset,
  shouldDisableDecrementButton,
  shouldDisableIncrementButton,
  shouldDisableResetButton
} from './helpers'

const INITIAL_DATE = getCurrentMonthAndYear()

export const ReceiptMonthAndYearLayout = () => {

  const initialDate = useMemo(() => INITIAL_DATE, [])
  const [date, setDate] = useState(initialDate)
  const [receipts, loading] = useReceipts(date)

  const yearOptions = [2024, 2023, 2022]
  const yearSelectOptions = buildDropdownOptions(yearOptions)

  const setMonth = (month) => {
    setDate((date) => ({ ...date, month }))
  }

  const setYear = (year) => {
    setDate((date) => ({ ...date, year }))
  }

  const carouselProps = {
    leftButton: {
      disabled: shouldDisableDecrementButton(date, yearOptions),
      onClick: () => setDate(decrement(date))
    },
    resetButton: {
      content: 'Текущий месяц',
      disabled: shouldDisableResetButton(date, initialDate),
      onClick: () => setDate(reset(initialDate))
    },
    rightButton: {
      disabled: shouldDisableIncrementButton(date, yearOptions),
      onClick: () => setDate(increment(date))
    }
  }

  return (
    <DefaultLayout
      loading={loading}
      receipts={receipts}
      dateSelect={{
        as: MonthAndYearSelect,
        date,
        yearSelectOptions,
        setSelectedMonth: setMonth,
        setSelectedYear: setYear
      }}
      carousel={{ ...carouselProps }}
    />
  )
}