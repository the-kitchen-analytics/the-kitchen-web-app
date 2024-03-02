import { Form } from 'semantic-ui-react'
import { MonthSelect, YearSelect } from '../../../shared/components'
import { buildDropdownOptions } from '../../../shared/utils/index.js'

export const MonthAndYearSelect = ({ date: { month, year }, setSelectedYear, setSelectedMonth, yearOptions }) => (
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
        options={buildDropdownOptions(yearOptions)}
      />
    </Form.Field>
  </Form.Group>
)