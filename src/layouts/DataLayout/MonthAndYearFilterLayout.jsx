import _ from 'lodash'
import { useMemo } from 'react'
import { Form } from 'semantic-ui-react'
import { Carousel, MonthSelect, YearSelect } from '../../shared/components'
import { useReceiptContext, useReceiptsFilteredByDate } from '../../shared/hooks'
import { FIRST_MONTH_INDEX, LAST_MONTH_INDEX, getCurrentMonthAndYear } from '../../shared/utils'

const INITIAL_DATE = getCurrentMonthAndYear()

export const MonthAndYearFilterLayout = ({ getData, as: Component }) => {

  const [componentProps, date, setDate] = useReceiptsFilteredByDate(INITIAL_DATE, getData)
  const { workedYears: yearOptions } = useReceiptContext()
  const defaultSelectedDate = useMemo(() => date, [])

  const setSelectedMonth = (month) => {
    setDate((date) => ({ ...date, month }))
  }

  const setSelectedYear = (year) => {
    setDate((date) => ({ ...date, year }))
  }

  const yearSelectOptions = useMemo(() => yearOptions.map(year => ({
    key: year,
    text: year,
    value: year
  })), [yearOptions])


  return (
    <>
      <Form className={'mb-1'}>
        <Form.Field>
          <MonthSelect
            value={date.month}
            handleChange={(e, { value }) => setSelectedMonth(value)}
            disabled={yearSelectOptions <= 1}
          />
        </Form.Field>
        <Form.Field>
          <YearSelect
            value={date.year}
            handleChange={(e, { value }) => setSelectedYear(value)}
            options={yearSelectOptions}
          />
        </Form.Field>
        <Form.Field>
          <Carousel
            leftButton={{
              disabled: yearSelectOptions.length === 0 || date.month <= FIRST_MONTH_INDEX,
              onClick: () => setSelectedMonth(date.month - 1)
            }}
            resetButton={{
              content: 'Текущий месяц',
              disabled: _.isEqual(defaultSelectedDate, date),
              onClick: () => setDate(defaultSelectedDate)
            }}
            rightButton={{
              disabled: yearSelectOptions.length === 0 || date.month >= LAST_MONTH_INDEX,
              onClick: () => setSelectedMonth(date.month + 1)
            }}
          />
        </Form.Field>
      </Form>

      <Component {...componentProps} />
    </>
  )
}