import { Form } from 'semantic-ui-react'
import { MonthSelect, YearSelect } from '../../../shared/components'

export const MonthAndYearSelect = ({ date: { month, year }, setSelectedYear, setSelectedMonth, yearSelectOptions }) => (
  <Form.Group widths={'2'} unstackable>
    <Form.Field>
      <MonthSelect
        value={month}
        handleChange={(e, { value }) => setSelectedMonth(value)}
      />
    </Form.Field>
    <Form.Field>
      <YearSelect
        value={year}
        handleChange={(e, { value }) => setSelectedYear(value)}
        options={yearSelectOptions}
      />
    </Form.Field>
  </Form.Group>
)