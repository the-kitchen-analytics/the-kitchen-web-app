import _ from 'lodash'
import { Form } from 'semantic-ui-react'
import { Carousel, DaySelect } from '../../../shared/components'
import { useReceiptContext, useReceiptsFilteredByDate } from '../../../shared/hooks'
import { buildDropdownOptions } from '../../../shared/utils'
import {
  decrement, increment, reset,
  shouldDisableDecrementButton,
  shouldDisableIncrementButton,
  shouldDisableResetButton
} from './helpers'

export const DayFilterLayout = ({ getData, as: Component }) => {

  const { workedDays: options } = useReceiptContext()
  const [componentProps, date, setDate] = useReceiptsFilteredByDate(options[0], getData)
  const selectedDayIndex = _.indexOf(options, date)

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
    <>
      <Form className={'mb-1'}>
        <Form.Field>
          <DaySelect
            value={date}
            options={buildDropdownOptions(options)}
            handleChange={(e, { value }) => setDate(value)}
          />
        </Form.Field>

        <Form.Field>
          <Carousel {...carouselProps} />
        </Form.Field>
      </Form>

      <Component {...componentProps} />
    </>
  )
}