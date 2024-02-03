import _ from 'lodash'
import { Form } from 'semantic-ui-react'
import { Carousel, DaySelect } from '../../shared/components'
import { useReceiptContext, useReceiptsFilteredByDate } from '../../shared/hooks'
import { buildDropdownOptions } from '../../shared/utils'

export const DayFilterLayout = ({ getData, as: Component }) => {

  const { workedDays: options } = useReceiptContext()
  const [componentProps, date, setDate] = useReceiptsFilteredByDate(options[0], getData)
  const selectedDayIndex = _.indexOf(options, date)

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
          <Carousel
            leftButton={{
              disabled: options.length === 0 || selectedDayIndex === _.lastIndexOf(options) - 1,
              onClick: () => setDate(options[selectedDayIndex + 1])
            }}
            resetButton={{
              content: 'Последний день',
              disabled: _.isEqual(date, _.first(options)),
              onClick: () => setDate(_.first(options))
            }}
            rightButton={{
              disabled: options.length === 0 || selectedDayIndex === 0,
              onClick: () => setDate(options[selectedDayIndex - 1])
            }}
          />
        </Form.Field>
      </Form>

      <Component {...componentProps} />
    </>
  )
}