import _ from 'lodash'
import { Form } from 'semantic-ui-react'
import { Carousel, YearSelect } from '../../../shared/components'
import { useReceiptContext, useReceiptsFilteredByDate } from '../../../shared/hooks'
import { buildDropdownOptions } from '../../../shared/utils'
import {
  decrement, increment, reset,
  shouldDisableDecrementButton,
  shouldDisableIncrementButton,
  shouldDisableResetButton
} from './helpers'

export const YearFilterLayout = ({ getData, as: Component }) => {

  const { workedYears: options } = useReceiptContext()
  const [statistics, date, setDate] = useReceiptsFilteredByDate(options[0], getData)
  const selectedYearIndex = _.indexOf(options, date)
  const yearSelectOptions = buildDropdownOptions(options)

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
    <>
      <Form className={'mb-1'}>
        <Form.Field>
          <YearSelect
            value={date}
            handleChange={(e, { value }) => setDate(value)}
            options={yearSelectOptions}
          />
        </Form.Field>
        <Form.Field>
          <Carousel {...carouselProps} />
        </Form.Field>
      </Form>

      <Component {...statistics} />
    </>
  )
}