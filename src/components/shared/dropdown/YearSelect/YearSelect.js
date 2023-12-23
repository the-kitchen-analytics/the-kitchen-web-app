
import { Dropdown } from 'semantic-ui-react'

export const YearSelect = ({ value, handleChange, options, disabled }) =>  (
  <Dropdown
    disabled={disabled || options.length <= 1}
    placeholder='Выберите год'
    button
    basic
    selection
    options={options}
    onChange={handleChange}
    value={value}
    className="large"
    fluid
  />
)