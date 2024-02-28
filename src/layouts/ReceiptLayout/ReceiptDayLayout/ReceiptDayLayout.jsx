import _ from 'lodash'
import { useState } from 'react'
import { DatePicker } from '../../../shared/components'
import {
  atStartDay,
  buildDropdownOptions,
  formatDateForDatePicker,
  getCurrentDate,
  parseDateFromDropdown
} from '../../../shared/utils'
import { DefaultLayout } from '../common'
import {
  decrement,
  increment,
  reset,
  shouldDisableDecrementButton,
  shouldDisableIncrementButton,
  shouldDisableResetButton
} from './helpers'
import { useReceipts } from './hooks'

const INITIAL_DATE = atStartDay(getCurrentDate())

export const ReceiptDayLayout = () => {
  const options = []
  const [date, setDate] = useState(INITIAL_DATE)
  const selectedDayIndex = _.indexOf(options, date)

  const [receipts, loading] = useReceipts(date)

  const carouselProps = {
    leftButton: {
      disabled: shouldDisableDecrementButton(selectedDayIndex, options),
      onClick: () => setDate(decrement(selectedDayIndex, options))
    },
    resetButton: {
      content: 'Последний день',
      disabled: shouldDisableResetButton(date, options),
      onClick: () => setDate(reset(options))
    },
    rightButton: {
      disabled: shouldDisableIncrementButton(selectedDayIndex, options),
      onClick: () => setDate(increment(selectedDayIndex, options))
    }
  }

  return (
    <DefaultLayout
      dateSelect={{
        as: DatePicker,
        value: formatDateForDatePicker(date),
        options: buildDropdownOptions(options),
        handleChange: (e, { value }) => setDate(parseDateFromDropdown(value))
      }}
      carousel={carouselProps}
      loading={loading}
      receipts={receipts}
    />
  )
}