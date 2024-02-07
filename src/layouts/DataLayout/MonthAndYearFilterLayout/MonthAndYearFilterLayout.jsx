import { useMemo } from 'react'
import { Form } from 'semantic-ui-react'
import { Carousel, MonthSelect, YearSelect } from '../../../shared/components'
import { useReceiptContext, useReceiptsFilteredByDate } from '../../../shared/hooks'
import { buildDropdownOptions, getCurrentMonthAndYear } from '../../../shared/utils'
import {
  increment, decrement, reset,
  shouldDisableIncrementButton,
  shouldDisableDecrementButton,
  shouldDisableResetButton
} from './helpers'

const INITIAL_DATE = getCurrentMonthAndYear()

export const MonthAndYearFilterLayout = ({ getData, as: Component }) => {

  const [componentProps, date, setDate] = useReceiptsFilteredByDate(INITIAL_DATE, getData)
  const { workedYears: yearOptions } = useReceiptContext()
  const initialDate = useMemo(() => date, [])
  const yearSelectOptions = buildDropdownOptions(yearOptions)

  const setSelectedMonth = (month) => {
    setDate((date) => ({ ...date, month }))
  }

  const setSelectedYear = (year) => {
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
    <>
      <Form className={'mb-1'}>
        <Form.Field>
          <Form.Group widths={'2'} unstackable>
            <Form.Field>
              <MonthSelect
                value={date.month}
                handleChange={(e, { value }) => setSelectedMonth(value)}
              />
            </Form.Field>
            <Form.Field>
              <YearSelect
                value={date.year}
                handleChange={(e, { value }) => setSelectedYear(value)}
                options={yearSelectOptions}
              />
            </Form.Field>
          </Form.Group>
        </Form.Field>

        <Form.Field>
          <Carousel {...carouselProps} />
        </Form.Field>
      </Form>

      <Component {...componentProps} />
    </>
  )
}