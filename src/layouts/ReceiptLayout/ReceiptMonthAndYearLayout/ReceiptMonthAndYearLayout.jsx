import { useState } from 'react'
import { getCurrentMonthAndYear, getYearOptions } from '../../../shared/utils'
import { ReceiptCommonLayout } from '../common'
import { MonthAndYearSelect } from './MonthAndYearSelect'
import { useInitialMonthAndYear, useReceipts } from './hooks'
import {
  decrement,
  increment,
  reset,
  shouldDisableDecrementButton,
  shouldDisableIncrementButton,
  shouldDisableResetButton
} from './helpers'

const CURRENT_MONTH_AND_YEAR = getCurrentMonthAndYear()

export const ReceiptMonthAndYearLayout = () => {

  const initialMonthAndYear = useInitialMonthAndYear()

  const [date, setDate] = useState(initialMonthAndYear)
  const [receipts, loading] = useReceipts(date)

  const yearOptions = getYearOptions()

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
      disabled: shouldDisableResetButton(date, CURRENT_MONTH_AND_YEAR),
      onClick: () => setDate(reset(CURRENT_MONTH_AND_YEAR))
    },
    rightButton: {
      disabled: shouldDisableIncrementButton(date, yearOptions),
      onClick: () => setDate(increment(date))
    }
  }

  return (
    <ReceiptCommonLayout
      loading={loading}
      receipts={receipts}
      dateSelect={{
        as: MonthAndYearSelect,
        date,
        yearOptions,
        setMonth,
        setYear
      }}
      carousel={{ ...carouselProps }}
    />
  )
}