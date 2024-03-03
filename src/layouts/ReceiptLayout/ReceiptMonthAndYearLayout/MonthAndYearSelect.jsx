import { Form } from 'semantic-ui-react'
import { MonthSelect, YearSelect } from '../../../shared/components'
import { buildDropdownOptions } from '../../../shared/utils'

export const MonthAndYearSelect = ({ date: { month, year }, setMonth, setYear, yearOptions }) => (
  <Form.Group widths={'2'} unstackable>
    <Form.Field>
      <MonthSelect
        value={month}
        handleChange={(e, { value }) => setMonth(value)}
      />
    </Form.Field>
    <Form.Field>
      <YearSelect
        value={year}
        handleChange={(e, { value }) => setYear(value)}
        options={buildDropdownOptions(yearOptions)}
      />
    </Form.Field>
  </Form.Group>
)