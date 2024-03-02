import _ from 'lodash'
import { useState } from 'react'
import { buildDropdownOptions, getCurrentDate, getYearOptions } from '../../../shared/utils'
import { YearSelect } from '../../../shared/components'
import { DefaultLayout } from '../common'
import { useReceipts } from './hooks'
import { decrement, increment, reset, shouldDisableDecrementButton, shouldDisableIncrementButton } from './helpers'
import { useLastWorkedDayContext } from '../../../shared/hooks'

const CURRENT_YEAR = getCurrentDate().getFullYear()

export const ReceiptYearLayout = () => {

  const initialDate = useLastWorkedDayContext()
  const [date, setDate] = useState(initialDate.getFullYear())
  const [receipts, loading] = useReceipts(date)

  const options = getYearOptions()
  const selectedYearIndex = _.indexOf(options, date)
  const yearSelectOptions = buildDropdownOptions(options)

  const carouselProps = {
    leftButton: {
      disabled: shouldDisableDecrementButton(selectedYearIndex, options),
      onClick: () => setDate(decrement(selectedYearIndex, options))
    },
    resetButton: {
      content: 'Текущий год',
      disabled: date === CURRENT_YEAR,
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