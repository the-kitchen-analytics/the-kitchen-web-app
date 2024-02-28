import _ from 'lodash'
import { useState } from 'react'
import { buildDropdownOptions } from '../../../shared/utils'
import { YearSelect } from '../../../shared/components'
import { DefaultLayout } from '../common'
import { useReceipts } from './hooks'
import {
  decrement,
  increment,
  reset,
  shouldDisableDecrementButton,
  shouldDisableIncrementButton,
  shouldDisableResetButton
} from './helpers'

export const ReceiptYearLayout = () => {

  const options = [2024, 2023, 2022]
  const [date, setDate] = useState(options[0])
  const selectedYearIndex = _.indexOf(options, date)
  const yearSelectOptions = buildDropdownOptions(options)
  const [receipts, loading] = useReceipts(date)

  const carouselProps = {
    leftButton: {
      disabled: shouldDisableDecrementButton(selectedYearIndex, options),
      onClick: () => setDate(decrement(selectedYearIndex, options))
    },
    resetButton: {
      content: 'Текущий год',
      disabled: shouldDisableResetButton(date, options),
      onClick: () => setDate(reset(options))
    },
    rightButton: {
      disabled: shouldDisableIncrementButton(selectedYearIndex, options),
      onClick: () => setDate(increment(selectedYearIndex, options))
    }
  }

  return (
    <DefaultLayout
      loading={loading}
      receipts={receipts}
      dateSelect={{
        as: YearSelect,
        value: date,
        handleChange: (e, { value }) => setDate(value),
        options: yearSelectOptions
      }}
      carousel={{ ...carouselProps }}
    />
  )
} 