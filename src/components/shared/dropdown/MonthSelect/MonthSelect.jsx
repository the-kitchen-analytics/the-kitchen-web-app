
import { Dropdown } from 'semantic-ui-react'
import { getMonthOptions } from '../../../../utils'

export const MonthSelect = ({ value, handleChange, options, disabled }) => (
  <Dropdown
    disabled={disabled}
    placeholder='Выберите месяц'
    button
    basic
    selection
    options={options || getMonthOptions()}
    onChange={handleChange}
    value={value}
    className="large"
    fluid
  />
)