import _ from 'lodash'
import { useMemo } from 'react'
import { Form } from 'semantic-ui-react'
import { Carousel, YearSelect } from '../../shared/components'
import { useReceiptContext, useReceiptsFilteredByDate } from '../../shared/hooks'

export const YearFilterLayout = ({ getData, as: Component }) => {

  const { workedYears: options } = useReceiptContext()
  const [statistics, date, setDate] = useReceiptsFilteredByDate(options[0], getData)
  const selectedDayIndex = _.indexOf(options, date)

  const yearSelectOptions = useMemo(() => options.map(year => ({
    key: year,
    text: year,
    value: year
  })), [options])

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
          <Carousel
            leftButton={{
              disabled: options.length === 0 || selectedDayIndex === _.lastIndexOf(options) - 1,
              onClick: () => setDate(options[selectedDayIndex + 1])
            }}
            resetButton={{
              content: 'Текущий год',
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

      <Component {...statistics} />
    </>
  )
}